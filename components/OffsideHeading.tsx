// OffsideHeading.tsx
import ChangingAttribute from "./ChangingAttribute";
// const attributeOptions = ["Creativity", "Passion", "Integrity"];
const attributeOptions = [
  {
    key: 0,
    value: "Creativity",
  },
  {
    key: 1,
    value: "Passion",
  },
  {
    key: 2,
    value: "Integrity",
  },
];

const OffsideHeading = () => {
  return (
    <div className="absolute inset-0 z-10 flex p-4 md:p-6 py-24 md:py-24">
      <div className="text-white">
        <h2 className="text-4xl md:text-6xl font-light mb-4">
          We are{" "}
          <span className="text-4xl md:text-6xl font-bold mb-4">
            Offside Music
          </span>
        </h2>
        <h2 className="text-4xl md:text-6xl font-light mb-4">
          We are{" "}
          <span className="attribute-container">
            <ChangingAttribute attributeOptions={attributeOptions} />
          </span>
        </h2>
      </div>
    </div>
  );
};

export default OffsideHeading;
