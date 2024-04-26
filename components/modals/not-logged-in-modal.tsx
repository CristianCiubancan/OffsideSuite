import LoginOrRegister from "@/components/login-or-register";

const NotLoggedInModal = () => {
  const modalContent = (
    <div className="flex flex-col w-full text-white">
      <p className="text-center text-2xl font-bold p-8">
        You need to be logged in to do that.
      </p>
      <LoginOrRegister />
    </div>
  );

  return modalContent;
};

export default NotLoggedInModal;
