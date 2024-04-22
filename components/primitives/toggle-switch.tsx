interface IToggleSwitchProps {
  isOn: boolean;
  handleToggle: () => void;
  value1: string;
  value2: string;
}
const ToggleSwitch = ({
  isOn,
  handleToggle,
  value1,
  value2,
}: IToggleSwitchProps) => {
  return (
    <div
      className="border-2 border-red-800 rounded w-48 cursor-pointer select-none hover:bg-red-900"
      onClick={handleToggle}
    >
      <div className="relative h-8 flex">
        <div className="absolute inset-0 z-0 flex w-full divide-x divide-red-800">
          <div className="flex-1 h-8 flex items-center justify-center text-white font-lg">
            {value1}
          </div>
          <div className="flex-1 h-8 flex items-center justify-center text-white font-lg">
            {value2}
          </div>
        </div>
        <div
          style={{ transition: "left 0.3s ease-in-out" }}
          className={`absolute top-0 left-0 z-10 w-24 h-8 flex items-center justify-center rounded bg-red-800 text-white font-medium ${
            isOn ? "left-0" : "left-24"
          }`}
          // onClick={(e) => e.stopPropagation()}
        >
          {isOn ? value1 : value2}
        </div>
        <div className="hidden">
          {/* a div for each color's 800 and 900 variation */}
          <div className="left-0"></div>
          <div className="left-24"></div>
        </div>
      </div>
    </div>
  );
};

export default ToggleSwitch;
