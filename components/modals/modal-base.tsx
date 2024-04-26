"use client";
import React, { useEffect, useRef, useState } from "react";
import { useModal } from "@/components/contexts/modal-context";
import CancelIcon from "@/assets/icons/CancelIcon";
import Button from "@/components/primitives/button";

interface IModalBase {
  children: React.ReactNode;
}
const ModalBase = ({ children }: IModalBase) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const { isOpen, closeModal, additionalData } = useModal();
  const [isFinallyClosed, setIsFinallyClosed] = useState(false);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setIsFinallyClosed(false);
    } else {
      setTimeout(() => {
        setIsFinallyClosed(true);
      }, 300);
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div
      // the animation duration must match modalAnimationDuration from modal-context.tsx
      className={`position-fixed top-0 left-0 w-full h-full ${
        !isFinallyClosed
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
      ref={modalRef}
    >
      <div
        onClick={closeModal}
        className="bg-yellow-950 fixed inset-0 z-40 opacity-40"
      ></div>
      <div
        onClick={(e) => {
          e.stopPropagation();
          closeModal();
        }}
        className={`fixed z-50 flex justify-center items-center inset-0 p-4 transition-all ease-in-out duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          style={{
            height: additionalData?.forceButtonFix ? "100%" : "unset",
          }}
          className="relative max-w-screen-sm w-full"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="overflow-auto p-8 rounded-lg border-0 bg-red-700 w-full h-full"
          >
            <div className="w-full flex items-center justify-center">
              {/* <LoginOrRegister /> */}
              {children}
            </div>
          </div>
          <div className="absolute top-0 right-0 mt-2 mr-2 z-50">
            <Button onClick={closeModal} color="red">
              <CancelIcon width="24" height="24" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalBase;
