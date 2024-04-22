"use client";
import { Bebas_Neue } from "next/font/google";
import LoginButton from "./login-button";
const bebasNeue = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
});

const Header = () => {
  return (
    <div className="w-full h-16 fixed top-0 left-0 z-20 overflow-hidden">
      {/* a blurred navbar */}
      {/* <div className="blur-2xl h-16 w-full bg-red-700 flex justify-between absolute top-0 left-0"></div> */}
      <div className="h-16 w-full bg-red-700 flex justify-between absolute top-0 left-0"></div>

      <div
        className={`h-16 w-full flex justify-between items-center absolute z-30 top-0 left-0 p-4 text-white`}
      >
        <div className={`font-bold text-2xl text-white ${bebasNeue.className}`}>
          Offside Music
        </div>
        {/* TODO: maybe a add a menu once more functionalities are implemented */}
        {/* <Button
          color="yellow"
          onClick={() => {
            alert("Work in progress");
          }}
        >
          <MenuIcon className="w-8 h-8 inline-block mr-2" />
        </Button> */}
        <LoginButton />
      </div>
    </div>
  );
};
export default Header;
