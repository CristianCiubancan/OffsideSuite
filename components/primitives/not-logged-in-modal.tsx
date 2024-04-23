import LoginOrRegister from "@/components/primitives/login-or-register";
import ModalBase from "./modal-base";

const NotLoggedInModal = () => {
  const modalContent = (
    <ModalBase forceButtonFix>
      <div className="flex flex-col w-full text-white">
        <p className="text-center text-2xl font-bold p-8">
          You need to be logged in to do that.
        </p>
        <LoginOrRegister />
      </div>
    </ModalBase>
  );

  return modalContent;
};

export default NotLoggedInModal;
