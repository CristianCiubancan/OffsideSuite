import { Bebas_Neue } from "next/font/google";
import Link from "next/link";

const bebasNeue = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <nav className="w-full main-layout-footer bg-yellow-500 relative">
      <div className="container mx-auto p-8 relative z-10">
        <div className="flex justify-between items-center flex-col gap-4">
          <div className="text-xs display flex flex-wrap justify-center items-center">
            <Link
              href="/"
              className="text-black hover:text-red-700 w-10 text-center"
            >
              Home
            </Link>
            <span className="mx-4 text-red-700">|</span>
            <Link
              href="/terms"
              className="text-black hover:text-red-700 w-10 text-center"
            >
              Terms of Service
            </Link>
            <span className="mx-4 text-red-700">|</span>
            <Link
              href="/privacy"
              className="text-black hover:text-red-700 w-10 text-center"
            >
              Privacy Policy
            </Link>
          </div>
          <div className="flex justify-center items-center flex-col w-full">
            <p className="text-red-700 font-bold text-4xl text-center drop-shadow-lg">
              <span className={`${bebasNeue.className} drop-shadow-md`}>
                © 2024 Offside Music
              </span>
            </p>
          </div>
          <div className="flex justify-center items-center flex-col w-full">
            <div className="text-black text-xs w-full text-center drop-shadow-md">
              envisioned, designed and developed by{" "}
            </div>
            <span className="text-black text-sm w-full text-center drop-shadow-lg">
              Cristian Ciubăncan
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Footer;
