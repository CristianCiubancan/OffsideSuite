import LoginOrRegister from "@/components/primitives/login-or-register";
import ModalBase from "./modal-base";

const LoginOrRegisterModal = () => {
  const modalContent = (
    <ModalBase forceButtonFix>
      <LoginOrRegister />
    </ModalBase>
  );

  return modalContent;
};

export default LoginOrRegisterModal;
