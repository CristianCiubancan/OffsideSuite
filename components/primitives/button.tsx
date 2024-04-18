import { useMemo } from "react";
import Spinner from "@/components/primitives/spinner";
export interface IButtonProps {
  color?: string;
  loading?: boolean;
  fullWidth?: boolean;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const Button = ({
  color = "purple",
  loading,
  children,
  fullWidth,
  onClick = () => {},
  type = "button",
  disabled,
}: IButtonProps) => {
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
      `bg-${color}-${loading ? 900 : 800}
       hover:bg-${color}-900 
       ${loading ? `text-${color}-900` : "text-white"}
       font-bold
       py-2
       px-4
       rounded
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
        <div className="bg-black"></div>
        <div className="bg-white"></div>
      </div>
    </>
  );
};

export default Button;
