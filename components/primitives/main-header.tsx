"use client";
import { Bebas_Neue } from "next/font/google";
import LoginButton from "@/components/primitives/login-button";
import { useAuth } from "../contexts/auth-context";
import Spinner from "./spinner";
const bebasNeue = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
});

export const turnNameToHexColor = (name: string) => {
  const str = name
    .split("")
    .reduce((acc, char) => acc + char.charCodeAt(0), "");
  return `#${str.slice(0, 6)}`;
};
export const turnNameToSecondaryHexColor = (name: string) => {
  const str = name
    .split("")
    .reduce((acc, char) => acc + char.charCodeAt(0), "");
  return `#${str.slice(6, 12)}`;
};
const Header = () => {
  const { user, isLoading, error } = useAuth();
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
        {isLoading ? (
          <div className="p-4">
            <Spinner />
          </div>
        ) : user ? (
          <div className="flex justify-center w-16">
            <div
              className="flex items-center justify-center p-2 w-12 h-12 rounded-full text-white font-bold text-sm border-2"
              style={{
                borderColor: turnNameToSecondaryHexColor(
                  user.firstName + user.lastName
                ),
                backgroundColor: turnNameToHexColor(
                  user.firstName + user.lastName
                ),
                color: turnNameToSecondaryHexColor(
                  user.firstName + user.lastName
                ),
              }}
            >
              {user.nickname
                ? `${user.nickname.slice(0, 1).toUpperCase()}`
                : `${user.firstName.slice(0, 1).toUpperCase()} ${user.lastName
                    .slice(0, 1)
                    .toUpperCase()}`}
            </div>
          </div>
        ) : (
          <LoginButton />
        )}
      </div>
    </div>
  );
};
export default Header;
