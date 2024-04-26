"use client";
import UserIcon from "@/assets/icons/UserIcon";
import Button from "@/components/primitives/button";
import { ModalNames, useModal } from "@/components/contexts/modal-context";

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
        <UserIcon width={24} height={24} strokeWidth={2} />
      </Button>
    </>
  );
};

export default LoginButton;
