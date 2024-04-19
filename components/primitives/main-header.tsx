"use client";
import MenuIcon from "@/assets/icons/MenuIcon";
import { Bebas_Neue } from "next/font/google";
import Button from "@/components/primitives/button";
const bebasNeue = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
});

const Header = () => {
  return (
    <div className="w-full h-16 fixed top-0 left-0 z-10 overflow-hidden rounded-md">
      {/* a blurred navbar */}
      <div className="blur-2xl h-16 w-full bg-white flex justify-between absolute top-0 left-0"></div>
      <div
        className={`h-16 w-full flex justify-between items-center absolute z-20 top-0 left-0 p-4 text-white ${bebasNeue.className}`}
      >
        <div className="font-bold text-2xl">Offside Music</div>
        {/* TODO: maybe a add a menu once more functionalities are implemented */}
        {/* <Button
          color="yellow"
          onClick={() => {
            alert("Work in progress");
          }}
        >
          <MenuIcon className="w-8 h-8 inline-block mr-2" />
        </Button> */}
      </div>
    </div>
  );
};
export default Header;
