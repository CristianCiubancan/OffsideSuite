import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    // 1. Extract form data from the request body
    const formData = await request.json();
    // 1.1. validate data and throw errors if invalid
    const { email, phone, message } = formData;
    // 1.1.1. email validation
    if (!email) {
      return new Response(
        JSON.stringify({
          error: { message: "Email is required", field: "email" },
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({
          error: { message: "Invalid email address", field: "email" },
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }
    // 1.1.2. phone validation
    if (!phone) {
      return new Response(
        JSON.stringify({
          error: { message: "Phone number is required", field: "phone" },
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      return new Response(
        JSON.stringify({
          error: { message: "Phone number must be valid", field: "phone" },
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    // 2. Configure email transporter (same as before)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    } as nodemailer.SendMailOptions);

    // 3. Construct email content (same as before)
    const mailOptions = {
      from: process.env.SMTP_USER,
      // to have multiple recipients, use an array of email addresses
      to: (process.env.EMAIL_RECIEVERS || "baloo.programs@gmail.com").split(
        ","
      ),
      subject: "New Form Submission",
      text: `Form Details: ${JSON.stringify(formData)}`,
    };

    // 4. Send email
    try {
      await transporter.sendMail(mailOptions);
    } catch (err) {
      console.error(err);
      return new Response(
        JSON.stringify({
          error: {
            message: "Failed to send email, plase try again later.",
            field: "root",
          },
        }),
        {
          status: 500,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    return new Response(
      JSON.stringify({
        ok: {
          message: "Request was registered successfully.",
        },
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({
        error: {
          message: "Failed to send email, plase try again later.",
          field: "root",
        },
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
