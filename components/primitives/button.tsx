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
    () =>
      `bg-${color}-${loading ? 700 : 500} hover:bg-${color}-700 ${
        loading ? `text-${color}-700` : "text-white"
      } font-bold py-2 px-4 rounded relative ${fullWidth ? "w-full" : ""}`,
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
        {/* a div for each color's 500 and 700 variation */}
        <div className="bg-purple-500"></div>
        <div className="bg-purple-700 hover:bg-purple-700 text-purple-700"></div>
        <div className="bg-red-500"></div>
        <div className="bg-red-700 hover:bg-red-700 text-red-700"></div>
        <div className="bg-green-500"></div>
        <div className="bg-green-700 hover:bg-green-700 text-green-700"></div>
        <div className="bg-yellow-500"></div>
        <div className="bg-yellow-700 hover:bg-yellow-700 text-yellow-700"></div>
        <div className="bg-blue-500"></div>
        <div className="bg-blue-700 hover:bg-blue-700 text-blue-700"></div>
        <div className="bg-indigo-500"></div>
        <div className="bg-indigo-700 hover:bg-indigo-700 text-indigo-700"></div>
        <div className="bg-pink-500"></div>
        <div className="bg-pink-700 hover:bg-pink-700 text-pink-700"></div>
        <div className="bg-gray-500"></div>
        <div className="bg-gray-700 hover:bg-gray-700 text-gray-700"></div>
        <div className="bg-orange-500"></div>
        <div className="bg-orange-700 hover:bg-orange-700 text-orange-700"></div>
        <div className="bg-black"></div>
        <div className="bg-white"></div>
      </div>
    </>
  );
};

export default Button;
