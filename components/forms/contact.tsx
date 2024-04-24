"use client";
import { FormProvider, useForm } from "react-hook-form";
import InputField from "@/components/forms/input-field";
import Button from "@/components/primitives/button";
import { useState } from "react";
import { sendEmail } from "@/components/forms/forms.api";
import lodash from "lodash";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export interface IContactForm {
  contactEmail: string;
  phone: string;
  message?: string;
}

const ContactForm = ({}: {}) => {
  const methods = useForm({
    mode: "onTouched",
    reValidateMode: "onSubmit",
    defaultValues: {
      contactEmail: "",
      phone: "",
      message: "",
    },
  });
  const {
    handleSubmit,
    setError,
    formState: { errors },
  } = methods;
  const notify = () => toast("Your request was registered successfully.");
  const notifyError = () =>
    toast("Something went wrong, please try again later.", {
      type: "error",
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const rootError = lodash.get(errors, "root");
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(async (data) => {
          setIsLoading(true);
          try {
            const response = await sendEmail({
              ...data,
              email: data.contactEmail,
            });
            if (response?.error) {
              setError(response.error.field, {
                message: response.error.message,
              });
            } else {
              notify();
            }
          } catch (error) {
            notifyError();
          }

          setIsLoading(false);
        })}
        className="p-6 w-full max-w-screen-md right-0 text-white"
      >
        <div className="text-4xl font-bold mb-4">Contact us</div>
        <InputField
          label="Your E-mail address"
          name="contactEmail"
          validation={{
            required: "Email is required",
            minLength: {
              value: 6,
              message: "Email must be at least 6 characters",
            },
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Please enter a valid email",
            },
          }}
        />

        <InputField
          label="Phone Number"
          name="phone"
          validation={{
            required: "Phone number is required",
            // only allow numbers
            pattern: {
              value: /^[0-9]*$/,
              message: "Please enter a valid phone number",
            },
            minLength: {
              value: 10,
              message: "Phone number must be at least 10 characters",
            },
          }}
        />

        <InputField
          textarea
          label="Message (Optional)"
          name="message"
          validation={{
            required: false,
          }}
        />

        <Button
          type="submit"
          color="red"
          disabled={isLoading}
          loading={isLoading}
        >
          Submit
        </Button>

        {rootError ? (
          <div className="text-red-300 text-base italic mt-2">
            {rootError.message as string}
          </div>
        ) : (
          <div className="text-red-300 text-base italic mt-2 min-h-6"> </div>
        )}
      </form>
    </FormProvider>
  );
};

export default ContactForm;
