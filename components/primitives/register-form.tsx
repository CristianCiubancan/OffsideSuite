import { FormProvider, useForm } from "react-hook-form";
import InputField from "../forms/input-field";
import Button from "./button";

const RegisterForm = () => {
  const methods = useForm({
    mode: "onTouched",
    reValidateMode: "onSubmit",
    defaultValues: {
      email: "",
      phone: "",
      firstName: "",
      lastName: "",
      nickname: "",
      company: "",
      password: "",
    },
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  return (
    <FormProvider {...methods}>
      <form
        className="w-full"
        onSubmit={handleSubmit(async (data) => {
          console.log(data);
        })}
      >
        <InputField
          label="Your E-mail address"
          name="email"
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
          label="First Name"
          name="firstName"
          validation={{
            required: "First name is required",
            minLength: {
              value: 2,
              message: "First name must be at least 2 characters",
            },
          }}
        />
        <InputField
          label="Last Name"
          name="lastName"
          validation={{
            required: "Last name is required",
            minLength: {
              value: 2,
              message: "Last name must be at least 2 characters",
            },
          }}
        />
        <InputField label="Nickname (Optional)" name="nickname" />
        <InputField label="Company (Optional)" name="company" />
        <InputField
          label="Password"
          name="password"
          type="password"
          validation={{
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          }}
        />
        <InputField
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          validation={{
            required: "Confirm password is required",
            validate: (value) =>
              value === methods.watch("password") || "Passwords do not match",
          }}
        />
        <Button fullWidth color="red" type="submit">
          submit
        </Button>
      </form>
    </FormProvider>
  );
};

export default RegisterForm;
