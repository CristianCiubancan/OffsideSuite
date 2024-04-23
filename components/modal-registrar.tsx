import { ModalNames, useModal } from "./contexts/modal-context";
import BookModal from "./primitives/book-modal";
import NotLoggedInModal from "./primitives/not-logged-in-modal";
import LoginOrRegisterModal from "./primitives/register-modal";

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
