import UserIcon from "@/assets/icons/UserIcon";
import Button from "./button";
import { useState } from "react";
import Modal from "./modal";
import MenuIcon from "@/assets/icons/MenuIcon";
import ToggleSwitch from "./toggle-switch";
import LoginOrRegister from "./login-or-register";

const LoginButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button
        color="red"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <UserIcon width={24} height={24} strokeWidth={3} />
      </Button>

      {isOpen && (
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <LoginOrRegister />
        </Modal>
      )}
    </>
  );
};

export default LoginButton;
