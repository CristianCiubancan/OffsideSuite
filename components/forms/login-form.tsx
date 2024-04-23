import { FormProvider, useForm } from "react-hook-form";
import InputField from "./input-field";
import Button from "../primitives/button";
import { useState } from "react";
import { loginUser } from "@/api/user";
import { useRouter } from "next/navigation";
import lodash, { set } from "lodash";
import { useModal } from "../contexts/modal-context";
import { useAuth } from "../contexts/auth-context";

export interface ILoginForm {
  loginEmail: string;
  password: string;
}

const LoginForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const { refreshUser } = useAuth();
  const { closeModal } = useModal();

  const methods = useForm<ILoginForm>({
    mode: "onTouched",
    reValidateMode: "onSubmit",
    defaultValues: {
      loginEmail: "",
      password: "",
    },
  });

  const {
    handleSubmit,
    formState: { errors },
    setError,
  } = methods;

  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      const res = await loginUser({
        bodyOrQuery: data,
      });

      if (res?.token) {
        // set token as a cookie
        // document.cookie = `${config.cookie_name}=${res.token}; path=/;`;

        router.refresh();
        await refreshUser();
        setLoading(false);
        closeModal();
      } else {
        if (!res?.field && res?.error) {
          setError("password", {
            type: "manual",
            message: res.error,
          });
          if (res?.field !== "root") {
            setError("root", {
              type: "manual",
              message:
                "Something went wrong. Please check the form for errors. If the problem persists, please contact support.",
            });
          }
        }
        if (res?.field) {
          setError(res?.field, {
            type: "manual",
            message: res.error,
          });
        }
      }
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setError("root", {
        type: "manual",
        message: "Something went wrong. Please try again later.",
      });
    }
  };
  const rootError = lodash.get(errors, "root");
  return (
    <FormProvider {...methods} key={"login-form"}>
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
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
        <Button
          fullWidth
          color="red"
          type="submit"
          loading={loading}
          disabled={loading}
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

export default LoginForm;
