import LoginOrRegister from "@/components/login-or-register";
import ModalBase from "@/components/modals/modal-base";

const LoginOrRegisterModal = () => {
  const modalContent = (
    <ModalBase forceButtonFix>
      <LoginOrRegister />
    </ModalBase>
  );

  return modalContent;
};

export default LoginOrRegisterModal;
