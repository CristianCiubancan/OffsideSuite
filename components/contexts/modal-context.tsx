"use client";
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
const modalAnimationDuration = 300;
interface ModalContextProps {
  isOpen: boolean;
  closeModal: () => void;
  openModal: (modalName: string, additionalData?: any) => void;
  currentModalName: string | null;
  additionalData: Record<string, any> | null;
  setAdditionalData: (data: any) => void;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactElement }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentModalName, setCurrentModalName] = useState<string | null>(
    ModalNames.REGISTER
  );
  const [additionalData, setAdditionalData] = useState<any>(null);
  const closeModal = async () => {
    setIsOpen(false);
    await new Promise((resolve) => setTimeout(resolve, modalAnimationDuration));
    setAdditionalData(null);
  };
  const openModal = (modalName: string, additionalData?: any) => {
    setCurrentModalName(modalName);

    // fix for the scrollable modals
    // TODO: look into a better way to handle this
    if (
      modalName === ModalNames.REGISTER ||
      modalName === ModalNames.NOTLOGGEDIN
    ) {
      if (additionalData) {
        setAdditionalData({ ...additionalData, forceButtonFix: true });
      } else setAdditionalData({ forceButtonFix: true });
    } else setAdditionalData(additionalData);

    setIsOpen(true);
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
