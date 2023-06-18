// /* eslint-disable @typescript-eslint/no-unused-vars */
import { InputHTMLAttributes } from "react";

function currency(e: React.FormEvent<HTMLInputElement>) {
  let value = e.currentTarget.value;
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d)(\d{2})$/, "$1,$2");
  value = value.replace(/(?=(\d{3})+(\D))\B/g, ".");

  e.currentTarget.value = value;
  return e;
}

export interface InputCurrencyProps
  extends InputHTMLAttributes<HTMLInputElement> {
  prefix?: string;
  label?: string;
  id?: string;
  name?: string;
  placeholder?: string;
}

const InputCurrency: React.FC<InputCurrencyProps> = ({
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
          onKeyUp={(e) => currency(e)}
          type="text"
          name={name}
          id={id}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default InputCurrency;


