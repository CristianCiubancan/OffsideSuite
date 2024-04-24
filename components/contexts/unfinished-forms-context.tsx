import { createContext, useContext, useState } from "react";
import { IBookForm } from "@/components/forms/book-form";
import { IContactForm } from "@/components/forms/contact";
import { IRegisterForm } from "@/components/forms/register-form";
import { ILoginForm } from "@/components/forms/login-form";

export enum FormNames {
  BOOKING = "BookForm",
  CONTACT = "ContactForm",
  LOGIN = "LoginForm",
  REGISTER = "RegisterForm",
}

type IUnfinishedFormsContextState = {
  [FormNames.BOOKING]: IBookForm;
  [FormNames.CONTACT]: IContactForm;
  [FormNames.REGISTER]: IRegisterForm;
  [FormNames.LOGIN]: ILoginForm;
};

interface IUnfinishedFormsContext {
  formsState: IUnfinishedFormsContextState;
  updateFormState: (formName: FormNames, form: any) => void;
}

const defaultUnfinishedForms: IUnfinishedFormsContextState = {
  [FormNames.BOOKING]: {
    projectDescription: "",
    projectName: "",
  },
  [FormNames.CONTACT]: {
    contactEmail: "",
    message: "",
    contactPhone: "",
  },
  [FormNames.LOGIN]: {
    loginEmail: "",
    password: "",
  },
  [FormNames.REGISTER]: {
    company: "",
    email: "",
    firstName: "",
    lastName: "",
    nickname: "",
    password: "",
    phone: "",
  },
};
const UnfinishedFormsContext = createContext<IUnfinishedFormsContext>({
  formsState: defaultUnfinishedForms,
  updateFormState: () => {},
});

export const UnfinishedFormsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [unfinishedForms, setUnfinishedForms] =
    useState<IUnfinishedFormsContextState>(defaultUnfinishedForms);

  const updateUnfinishedForm = (formName: FormNames, form: any) => {
    setUnfinishedForms((prev) => ({
      ...prev,
      [formName]: form,
    }));
  };

  return (
    <UnfinishedFormsContext.Provider
      value={{
        formsState: unfinishedForms,
        updateFormState: updateUnfinishedForm,
      }}
    >
      {children}
    </UnfinishedFormsContext.Provider>
  );
};

export const useUnfinishedForms = () => {
  const context = useContext(UnfinishedFormsContext);
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
