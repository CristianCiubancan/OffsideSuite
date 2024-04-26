import { useMemo } from "react";
import Spinner from "@/components/primitives/spinner";
export interface IButtonProps {
  color?: string;
  loading?: boolean;
  theme?: "light" | "dark";
  fullWidth?: boolean;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
  disabled?: boolean;
}

const Button = ({
  color = "purple",
  loading,
  children,
  theme = "dark",
  fullWidth,
  onClick = () => {},
  type = "button",
  ariaLabel,
  disabled,
}: IButtonProps) => {
  const colorVariationLight = theme === "light" ? 500 : 800;
  const colorVariationDark = theme === "light" ? 600 : 900;
  const classes = useMemo(
    // () =>
    //   `bg-${color}-${loading ? 900 : 800}
    //    hover:bg-${color}-900
    //    ${loading ? `text-${color}-900` : "text-white"}
    //    font-bold
    //    py-2
    //    px-4
    //    rounded
    //    relative
    //    ${fullWidth ? "w-full" : ""}`,
    () =>
      `bg-${color}-${loading ? colorVariationDark : colorVariationLight}
       hover:bg-${color}-${colorVariationDark} 
       ${
         loading || disabled
           ? `text-${color}-${colorVariationDark}`
           : theme === "light"
           ? "text-black"
           : "text-white"
       }
       font-bold
       py-2
       px-4
       rounded
       ${theme === "light" ? "" : "drop-shadow-md"}
       relative
       ${fullWidth ? "w-full" : ""}`,
    [color, loading, fullWidth]
  );
  return (
    <>
      <button
        onClick={onClick}
        className={classes}
        type={type}
        disabled={disabled}
        aria-label={ariaLabel ? ariaLabel : "button"}
      >
        {children}
        {loading ? (
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
            <Spinner size={"small"} />
          </div>
        ) : null}
      </button>
      {/* here we will insert a hidden div that will contain a bunch of our preffered colours so tailwind can build them if passed as tempalte strings elsewhere*/}

      <div className="hidden">
        {/* a div for each color's 800 and 900 variation */}
        <div className="bg-purple-800"></div>
        <div className="bg-purple-900 hover:bg-purple-900 text-purple-900"></div>
        <div className="bg-red-800"></div>
        <div className="bg-red-900 hover:bg-red-900 text-red-900"></div>
        <div className="bg-green-800"></div>
        <div className="bg-green-900 hover:bg-green-900 text-green-900"></div>
        <div className="bg-yellow-800"></div>
        <div className="bg-yellow-900 hover:bg-yellow-900 text-yellow-900"></div>
        <div className="bg-blue-800"></div>
        <div className="bg-blue-900 hover:bg-blue-900 text-blue-900"></div>
        <div className="bg-indigo-800"></div>
        <div className="bg-indigo-900 hover:bg-indigo-900 text-indigo-900"></div>
        <div className="bg-pink-800"></div>
        <div className="bg-pink-900 hover:bg-pink-900 text-pink-900"></div>
        <div className="bg-gray-800"></div>
        <div className="bg-gray-900 hover:bg-gray-900 text-gray-900"></div>
        <div className="bg-orange-800"></div>
        <div className="bg-orange-900 hover:bg-orange-900 text-orange-900"></div>
        <div className="bg-purple-500"></div>
        <div className="bg-purple-600 hover:bg-purple-600 text-purple-600"></div>
        <div className="bg-red-500"></div>
        <div className="bg-red-600 hover:bg-red-600 text-red-600"></div>
        <div className="bg-green-500"></div>
        <div className="bg-green-600 hover:bg-green-600 text-green-600"></div>
        <div className="bg-yellow-300"></div>
        <div className="bg-yellow-600 hover:bg-yellow-600 text-yellow-600"></div>
        <div className="bg-blue-500"></div>
        <div className="bg-blue-600 hover:bg-blue-600 text-blue-600"></div>
        <div className="bg-indigo-500"></div>
        <div className="bg-indigo-600 hover:bg-indigo-600 text-indigo-600"></div>
        <div className="bg-pink-500"></div>
        <div className="bg-pink-600 hover:bg-pink-600 text-pink-600"></div>
        <div className="bg-gray-500"></div>
        <div className="bg-gray-600 hover:bg-gray-600 text-gray-600"></div>
        <div className="bg-orange-500"></div>
        <div className="bg-orange-600 hover:bg-orange-600 text-orange-600"></div>
        <div className="bg-black"></div>
        <div className="text-black"></div>
        <div className="bg-white"></div>
        <div className="text-white"></div>
        {/* here we will add all miscelaneous classes that are used in dynamic properties in order to have them */}
        <div className="" />
      </div>
    </>
  );
};

export default Button;
