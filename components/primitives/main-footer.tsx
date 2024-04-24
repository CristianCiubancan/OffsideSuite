import Link from "next/link";

const Footer = () => {
  return (
    <nav className="w-full main-layout-footer bg-yellow-500 relative">
      <div className="container mx-auto p-8 relative z-10">
        <div className="flex justify-between items-center flex-col">
          <div className="pb-2 flex justify-center items-center flex-col w-full">
            <p className="text-red-700 font-bold text-4xl text-center">
              © 2024 Offside Music
            </p>
          </div>
          <div className="text-xs display flex flex-wrap justify-center items-center">
            <Link
              href="/"
              className="text-black hover:text-red-700 w-10 text-center"
            >
              Home
            </Link>
            <span className="mx-4 text-white">|</span>
            <Link
              href="/terms"
              className="text-black hover:text-red-700 w-10 text-center"
            >
              Terms of Service
            </Link>
            <span className="mx-4 text-white">|</span>
            <Link
              href="/privacy"
              className="text-black hover:text-red-700 w-10 text-center"
            >
              Privacy Policy
            </Link>
          </div>
          <div className="text-yellow-400 text-sm w-full text-center pt-4 drop-shadow-md">
            envisioned, designed and developed by{" "}
          </div>
          <span className="text-yellow-400 text-2xl w-full text-center drop-shadow-lg">
            Ciubăncan Cristian
          </span>
        </div>
      </div>
    </nav>
  );
};
export default Footer;
