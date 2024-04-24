import Link from "next/link";

const Footer = () => {
  return (
    <nav className="w-full main-layout-footer bg-yellow-500 relative">
      <div className="container mx-auto p-8">
        <div className="flex justify-between items-center flex-col">
          <div className="pb-2 flex justify-center items-center flex-col w-full">
            <p className="text-red-700 font-bold text-2xl">
              © 2024 Offside Music
            </p>
          </div>
          <div>
            <Link href="/" className="text-black hover:text-red-700">
              Home
            </Link>
            <span className="mx-4 text-white">|</span>
            <Link href="/terms" className="text-black hover:text-red-700">
              Terms of Service
            </Link>
            <span className="mx-4 text-white">|</span>
            <Link href="/privacy" className="text-black hover:text-red-700">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
      <div className="text-yellow-400 text-sm absolute bottom-2 right-2">
        Invisioned, designed and developed by{" "}
        <span className="text-bold text-2xl">Ciubăncan Cristian</span>
      </div>
    </nav>
  );
};
export default Footer;
