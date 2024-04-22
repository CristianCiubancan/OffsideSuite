import { useEffect } from "react";

interface IModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ children, isOpen, onClose }: IModalProps) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  return isOpen ? (
    <>
      <div
        onClick={onClose}
        className="bg-red-950 fixed w-full h-screen z-40 top-0 left-0 opacity-20"
      ></div>
      <div
        onClick={onClose}
        className="fixed z-50 flex justify-center items-center h-screen w-full overflow-auto top-0 left-0"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="p-4 rounded-lg bg-red-700 max-w-screen-sm w-full h-auto overflow-auto"
        >
          {children}
        </div>
      </div>
    </>
  ) : null;
};
export default Modal;
