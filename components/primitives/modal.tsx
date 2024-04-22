import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

interface IModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ children, isOpen, onClose }: IModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

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
    <div className="position-fixed top-0 lef-0" ref={modalRef}>
      <div
        onClick={onClose}
        className="bg-red-950 fixed inset-0 z-40 opacity-40"
      ></div>
      <div
        onClick={onClose}
        className="fixed z-50 flex justify-center items-center inset-0 p-4 overflow-auto top-0 left-0 w-full h-full"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="p-8 rounded-lg border-0 bg-red-700 max-w-screen-sm w-full overflow-auto max-h-full"
        >
          {children}
        </div>
      </div>
    </div>
  ) : null;

  // Use ReactDOM.createPortal to render the modalContent into the modal-root
  return modalContent
    ? ReactDOM.createPortal(
        modalContent,
        document.getElementById("modal-root")!
      )
    : null;
};

export default Modal;
