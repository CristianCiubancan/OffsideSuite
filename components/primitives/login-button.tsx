"use client";
import UserIcon from "@/assets/icons/UserIcon";
import Button from "@/components/primitives/button";
import { ModalNames, useModal } from "../contexts/modal-context";

const LoginButton = () => {
  const { openModal } = useModal();

  return (
    <>
      <Button
        color="red"
        onClick={() => {
          openModal(ModalNames.REGISTER);
        }}
      >
        <UserIcon width={24} height={24} strokeWidth={3} />
      </Button>
    </>
  );
};

export default LoginButton;
