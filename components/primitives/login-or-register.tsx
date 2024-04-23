"use client";
import { useState } from "react";
import ToggleSwitch from "@/components/primitives/toggle-switch";
import LoginForm from "@/components/forms/login-form";
import RegisterForm from "@/components/forms/register-form";
import { toast } from "react-toastify";

const LoginOrRegister = () => {
  const [isLogin, setIsLogin] = useState(true);
  const notify = () => toast("Your account was registered successfully.");

  return (
    <div className="w-full">
      <div className="flex flex-col items-center gap-4">
        <ToggleSwitch
          value1="Login"
          value2="Register"
          isOn={isLogin}
          handleToggle={() => {
            setIsLogin(!isLogin);
          }}
        />
        {isLogin ? <LoginForm /> : <RegisterForm notify={notify} />}
      </div>
    </div>
  );
};

export default LoginOrRegister;
