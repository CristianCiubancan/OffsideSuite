import React, {
  createContext,
  useState,
  useContext,
  useMemo,
  ReactElement,
} from "react";

export enum ModalNames {
  REGISTER = "LoginOrRegisterModal",
  NOTLOGGEDIN = "NotLoggedInModal",
  BOOKING = "BookModal",
}

interface ModalContextProps {
  isOpen: boolean;
  closeModal: () => void;
  openModal: (modalName: string, additionalData?: any) => void;
  currentModalName: string | null;
  additionalData: any | null;
  setAdditionalData: (data: any) => void;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactElement }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentModalName, setCurrentModalName] = useState<string | null>(null);
  const [additionalData, setAdditionalData] = useState<any>(null);
  const closeModal = () => setIsOpen(false);
  const openModal = (modalName: string, additionalData?: any) => {
    setIsOpen(true);
    setCurrentModalName(modalName);
    if (additionalData) {
      setAdditionalData(additionalData);
    }
  };

  const providerValue = useMemo(
    () => ({
      isOpen,
      closeModal,
      openModal,
      currentModalName,
      additionalData,
      setAdditionalData,
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
