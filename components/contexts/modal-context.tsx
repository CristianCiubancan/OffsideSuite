import React, {
  createContext,
  useState,
  useContext,
  useMemo,
  ReactElement,
  useEffect,
} from "react";

interface ModalContextProps {
  isOpen: boolean;
  closeModal: () => void;
  openModal: () => void;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactElement }) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const providerValue = useMemo(
    () => ({
      isOpen,
      closeModal,
      openModal,
    }),
    [isOpen]
  );

  return (
    <ModalContext.Provider value={providerValue}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
