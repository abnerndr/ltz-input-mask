/* eslint-disable @typescript-eslint/no-unused-vars */
import { InputHTMLAttributes } from "react";

function cep(e: React.FormEvent<HTMLInputElement>) {
  e.currentTarget.maxLength = 9;
  let value = e.currentTarget.value;
  value = value.replace(/\D/g, "");
  value = value.replace(/^(\d{5})(\d)/, "$1-$2");
  e.currentTarget.value = value;
  return e;
}

export interface InputCepProps
  extends InputHTMLAttributes<HTMLInputElement> {
  prefix?: string;
  label?: string;
  id?: string;
  name?: string;
  placeholder?: string;
}

const InputCep: React.FC<InputCepProps> = ({
  prefix,
  id,
  name,
  label,
  placeholder,
  ...props
}) => {
  return (
    <div>
      <label
        htmlFor={name ? name : id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          {...props}
          onKeyUp={(e) => cep(e)}
          type="text"
          name={name}
          id={id}
          className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default InputCep;
