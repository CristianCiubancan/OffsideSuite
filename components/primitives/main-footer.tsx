import Link from "next/link";
import { use } from "react";

const getUser = async (id: number) => {
  const user = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    cache: "no-store",
  });
  return user.json();
};

const Footer = () => {
  const user = use(getUser(1));
  return (
    <nav className="w-full main-layout-footer bg-purple-500">
      <div className="main-layout-footer-content flex justify-between items-center px-6 text-white">
        <div className="main-layout-footer-content-heading w-full">
          <Link href="/" className="cursor-pointer">
            <div>Logo</div>
          </Link>
          <Link href="/profile" className="cursor-pointer">
            {user.name}
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Footer;
