import UserIcon from "@/assets/icons/UserIcon";
import Button from "./button";
import { useState } from "react";
import Modal from "./modal";
import MenuIcon from "@/assets/icons/MenuIcon";

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
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-2xl">Login</h2>

            <Button
              fullWidth
              color="orange"
              onClick={() => {
                alert("Work in progress");
              }}
            >
              GMAIL
            </Button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default LoginButton;
