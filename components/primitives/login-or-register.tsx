import { useState } from "react";
import ToggleSwitch from "./toggle-switch";
import Button from "./button";
import { FormProvider, useForm } from "react-hook-form";
import InputField from "../forms/input-field";
import LoginForm from "./login-form";
import RegisterForm from "./register-form";

const LoginOrRegister = () => {
  const [isLogin, setIsLogin] = useState(true);
  const methods = useForm({
    mode: "onTouched",
    reValidateMode: "onSubmit",
    defaultValues: {
      email: "",
      password: "",
    },
  });
  return (
    <>
      <div className="flex flex-col items-center gap-4">
        <ToggleSwitch
          value1="Login"
          value2="Register"
          isOn={isLogin}
          handleToggle={() => {
            setIsLogin(!isLogin);
          }}
        />
        {isLogin ? <LoginForm /> : <RegisterForm />}
      </div>
    </>
  );
};

export default LoginOrRegister;
