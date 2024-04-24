import { ModalNames, useModal } from "@/components/contexts/modal-context";
import BookModal from "@/components/modals/book-modal";
import NotLoggedInModal from "@/components/modals/not-logged-in-modal";
import LoginOrRegisterModal from "@/components/modals/register-modal";

const ModalRegistrar = () => {
  const { currentModalName } = useModal();
  return (
    <div>
      {currentModalName === ModalNames.REGISTER ? (
        <LoginOrRegisterModal />
      ) : null}
      {currentModalName === ModalNames.NOTLOGGEDIN ? (
        <NotLoggedInModal />
      ) : null}
      {currentModalName === ModalNames.BOOKING ? <BookModal /> : null}
    </div>
  );
};

export default ModalRegistrar;
