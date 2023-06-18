// /* eslint-disable @typescript-eslint/no-unused-vars */
import { InputHTMLAttributes } from 'react';

function currency(e: React.FormEvent<HTMLInputElement>) {
  let value = e.currentTarget.value;
  value = value.replace(/\D/g, '');
  value = value.replace(/(\d)(\d{2})$/, '$1,$2');
  value = value.replace(/(?=(\d{3})+(\D))\B/g, '.');

  e.currentTarget.value = value;
  return e;
}

export interface InputCurrencyProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  name?: string;
  label?: string;
  placeholder?: string;
  error?: string;
  prefix?: 'R$' | '$';
  current?: 'BRL' | 'USD';
  className?: any;
}

const InputCurrency: React.FC<InputCurrencyProps> = ({
  id,
  name,
  label,
  placeholder,
  error,
  prefix = 'R$',
  current = 'BRL',
  className = 'block w-full rounded-md border-0 py-1.5 pl-9 pr-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6',
  ...props
}) => {
  return (
    <div>
      <label
        htmlFor={name ? name : id}
        className='block text-sm font-medium leading-6 text-gray-900'
      >
        {label}
      </label>
      <div className='relative mt-1 rounded-md shadow-sm'>
        <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
          <span className='text-gray-500 sm:text-sm'>{prefix}</span>
        </div>
        <input
          {...props}
          onKeyUp={(e) => currency(e)}
          type='text'
          name={name}
          id={id}
          className={className}
          placeholder={placeholder}
          aria-describedby='price-currency'
        />
        <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3'>
          <span className='text-gray-500 sm:text-sm' id='price-currency'>
            {current}
          </span>
        </div>
      </div>
      {error && <p className='text-sm text-red-500 font-medium'>• {error}</p>}
    </div>
  );
};

export default InputCurrency;
