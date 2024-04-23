import React, { InputHTMLAttributes } from "react";
import { RegisterOptions, useFormContext } from "react-hook-form";
import lodash from "lodash";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
  textarea?: boolean;
  handleChange?: any;
  validation?: RegisterOptions;
  value?: any;
  type?: string;
  autoComplete?: string;
};

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  validation,
  size: _,
  textarea,
  autoComplete,
  type,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = lodash.get(errors, name);

  return (
    <div className="mb-4">
      {!textarea ? (
        <div className="relative">
          <input
            {...register(name, validation)}
            autoComplete={autoComplete}
            className="rounded-none block px-2.5 pb-2.5 pt-5 w-full min-h-10 text-base text-white bg-red-700 border-0 border-b-2 border-white appearance-none focus:outline-none focus:ring-0 focus:border-yellow-500 peer"
            type={type ? type : "text"}
            id={name}
            placeholder=" "
          />
          <label
            htmlFor={name}
            className={`${
              !!error ? "border-red-100" : ""
            } absolute text-base text-white duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-yellow-500 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto`}
          >
            {label}
          </label>
        </div>
      ) : (
        <div className="relative">
          <textarea
            {...register(name, validation)}
            id={name}
            autoComplete={autoComplete}
            rows={4}
            className="block p-2.5 w-full min-h-10 text-base text-white bg-red-700 rounded-sm border-2 border-white appearance-none focus:outline-none focus:ring-0 focus:border-yellow-500 peer"
            placeholder=" "
          ></textarea>
          <label
            htmlFor={name}
            className={`${
              !!error ? "border-red-100" : ""
            } bg-red-700 px-2 absolute text-base text-white duration-300 transform -translate-y-5 scale-75 top-3 z-10 origin-[0] start-2.5 peer-focus:text-yellow-500 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto`}
          >
            {label}
          </label>
        </div>
      )}
      {error ? (
        <div className="text-red-300 text-base italic mt-2">
          {error.message as string}
        </div>
      ) : (
        <div className="text-red-300 text-base italic mt-2 min-h-6"> </div>
      )}
    </div>
  );
};

export default InputField;
