"use client";
import React, { useEffect, useRef } from "react";
import { useModal } from "@/components/contexts/modal-context";
import LoginOrRegister from "@/components/primitives/login-or-register";
import CancelIcon from "@/assets/icons/CancelIcon";
import Button from "./button";

const LoginOrRegisterModal = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  const { isOpen, closeModal } = useModal();

  useEffect(() => {
    // Prevent scrolling on mount and restore on unmount
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const modalContent = isOpen ? (
    <div className="position-fixed top-0 left-0" ref={modalRef}>
      <div
        onClick={closeModal}
        className="bg-yellow-950 fixed inset-0 z-40 opacity-40"
      ></div>
      <div
        onClick={closeModal}
        className="fixed z-50 flex justify-center items-center inset-0 p-4 overflow-auto top-0 left-0 w-full h-full"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="p-8 rounded-lg border-0 bg-red-700 max-w-screen-sm w-full overflow-auto max-h-full relative"
        >
          <div className="fixed bg-red-900 z-50 top-0 left-0"></div>
          <div className="absolute top-0 right-0">
            <Button color="red" onClick={closeModal}>
              <CancelIcon width={24} height={24} />
            </Button>
          </div>
          <LoginOrRegister />
        </div>
      </div>
    </div>
  ) : null;

  // Use ReactDOM.createPortal to render the modalContent into the modal-root
  return modalContent;
  // ? ReactDOM.createPortal(
  //     modalContent,
  //     document.getElementById("modal-root")!
  //   )
  // : null;
};

export default LoginOrRegisterModal;
