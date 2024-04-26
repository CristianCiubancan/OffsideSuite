"use client";
import { ModalNames, useModal } from "@/components/contexts/modal-context";
import BookModal from "@/components/modals/book-modal";
import NotLoggedInModal from "@/components/modals/not-logged-in-modal";
import LoginOrRegisterModal from "@/components/modals/register-modal";
import ModalBase from "../modals/modal-base";

const ModalRegistrar = () => {
  const { currentModalName } = useModal();
  return (
    <div>
      <ModalBase>
        {currentModalName === ModalNames.REGISTER ? (
          <LoginOrRegisterModal />
        ) : null}
        {currentModalName === ModalNames.NOTLOGGEDIN ? (
          <NotLoggedInModal />
        ) : null}
        {currentModalName === ModalNames.BOOKING ? <BookModal /> : null}
      </ModalBase>
    </div>
  );
};

export default ModalRegistrar;
