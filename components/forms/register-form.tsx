import { FormProvider, useForm } from "react-hook-form";
import InputField from "@/components/forms/input-field";
import Button from "@/components/primitives/button";
import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useModal } from "@/components/contexts/modal-context";
import lodash from "lodash";
import { registerUser } from "@/api/user";
import { useAuth } from "@/components/contexts/auth-context";
import {
  FormNames,
  useUnfinishedForms,
} from "@/components/contexts/unfinished-forms-context";

export interface IRegisterForm {
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  nickname?: string;
  company?: string;
  password: string;
}

const RegisterForm = ({ notify }: { notify: () => void }) => {
  const { formsState, updateFormState } = useUnfinishedForms();
  const [loading, setLoading] = useState<boolean>(false);
  const { closeModal } = useModal();
  const { refreshUser } = useAuth();
  const methods = useForm<IRegisterForm>({
    mode: "onTouched",
    reValidateMode: "onSubmit",
    defaultValues: formsState.RegisterForm,
  });

  const {
    handleSubmit,
    formState: { errors },
    setError,
    getValues,
    reset,
  } = methods;
  const router = useRouter();

  useEffect(() => {
    // This function is called when the component unmounts
    return () => {
      if (methods.getValues()) {
        // Save the form data
        updateFormState(FormNames.REGISTER, getValues());
      }
    };
  }, []);

  const onSubmit = async (data: IRegisterForm) => {
    setLoading(true);
    const res = await registerUser({
      bodyOrQuery: data,
    });
    if (res?.token) {
      // set token as a cookie
      // document.cookie = `${config.cookie_name}=${res.token}; path=/;`;
      notify();
      reset({
        email: "",
        phone: "",
        firstName: "",
        lastName: "",
        nickname: "",
        company: "",
        password: "",
      });
      router.refresh();
      // sleep for 200ms
      await new Promise((resolve) => setTimeout(resolve, 200));
      await refreshUser();
      setLoading(false);
      closeModal();
    } else {
      if (res?.error) {
        setError(res?.field, {
          type: "manual",
          message: res.error,
        });
        if (res?.field !== "root") {
          setError("root", {
            type: "manual",
            message:
              "Please check the form for errors. If the problem persists, please contact support.",
          });
        }
      }
      setLoading(false);
    }
  };
  const rootError = lodash.get(errors, "root");
  return (
    <FormProvider {...methods} key={"register-form"}>
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <InputField
          label="Your E-mail address"
          name="email"
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
          label="Phone Number"
          name="phone"
          autoComplete="tel"
          validation={{
            required: "Phone number is required",
            // only allow numbers
            pattern: {
              value: /^\+?[0-9]{6,}$/,
              message: "Please enter a valid phone number.",
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
          autoComplete="given-name"
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
          autoComplete="family-name"
          name="lastName"
          validation={{
            required: "Last name is required",
            minLength: {
              value: 2,
              message: "Last name must be at least 2 characters",
            },
          }}
        />
        <InputField
          autoComplete="username"
          label="Nickname (Optional)"
          name="nickname"
        />
        <InputField
          autoComplete="organization"
          label="Company (Optional)"
          name="company"
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
        <InputField
          label="Confirm Password"
          autoComplete="current-password"
          name="confirmPassword"
          type="password"
          validation={{
            required: "Confirm password is required",
            validate: (value) =>
              value === methods.watch("password") || "Passwords do not match",
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

export default RegisterForm;
