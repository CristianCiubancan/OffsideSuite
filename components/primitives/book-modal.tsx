import LoginOrRegister from "@/components/primitives/login-or-register";
import ModalBase from "./modal-base";
import { toast } from "react-toastify";
import BookForm from "../forms/book-form";

const BookModal = () => {
  const notify = () => toast("Your booking was successful.");
  const modalContent = (
    <ModalBase>
      <div className="flex flex-col items-center gap-4 w-full">
        <p className="text-white text-4xl pt-4">Give us a few details.</p>
        <BookForm notify={notify} />
      </div>
    </ModalBase>
  );

  return modalContent;
};

export default BookModal;
