import { FormProvider, useForm } from "react-hook-form";
import InputField from "./input-field";
import Button from "../primitives/button";

const LoginForm = () => {
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
          name="loginEmail"
          autoComplete="email"
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
          label="Password"
          name="password"
          autoComplete="current-password"
          type="password"
          validation={{
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          }}
        />
        <Button fullWidth color="red" type="submit">
          Submit
        </Button>
      </form>
    </FormProvider>
  );
};

export default LoginForm;