// send the email form
export interface IEmailFormValues {
  phone: string;
  email: string;
  message: string;
}

export const sendEmail = async (values: IEmailFormValues) => {
  try {
    const resp = await fetch("/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const data = await resp.json();
    return data;
  } catch (error) {
    console.error("Failed to send email", error);
  }
};
