import { FormEvent, InputHTMLAttributes, useCallback, useMemo } from 'react';

// 16900001111
function cellphone(e: React.FormEvent<HTMLInputElement>) {
  e.currentTarget.maxLength = 16;
  let value = e.currentTarget.value;
  value = value.replace(/\D/g, '');
  value = value.replace(/^(\d{2})(\d{1})(\d{4})(\d)/, '($1) $2 $3-$4');
  e.currentTarget.value = value;
  return e;
}

function tellphone(e: React.FormEvent<HTMLInputElement>) {
  e.currentTarget.maxLength = 14;
  let value = e.currentTarget.value;
  value = value.replace(/\D/g, '');
  value = value.replace(/^(\d{2})(\d{4})(\d)/, '($1) $2-$3');
  e.currentTarget.value = value;
  return e;
}

export interface InputPhoneProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  name?: string;
  label?: string;
  error?: string;
  placeholder?: string;
  className?: any;
  maskPhone?: 'cell' | 'phone';
}

const InputPhone: React.FC<InputPhoneProps> = ({
  id,
  name,
  label,
  error,
  placeholder,
  className = `block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`,
  maskPhone,
  ...props
}) => {
  const handleMask = useCallback(
    (e: FormEvent<HTMLInputElement>) => {
      if (maskPhone === 'cell') {
        cellphone(e);
      } else if (maskPhone === 'phone') {
        tellphone(e);
      }
    },
    [maskPhone]
  );
  return (
    <div>
      <label
        htmlFor={name ? name : id}
        className='block text-sm font-medium leading-6 text-gray-900'
      >
        {label}
      </label>
      <div className='mt-1'>
        <input
          {...props}
          onKeyUp={handleMask}
          type='text'
          name={name}
          id={id}
          className={className}
          placeholder={placeholder}
        />
      </div>
      {error && <p className='text-sm text-red-600 font-medium'>{error}</p>}
    </div>
  );
};

export default InputPhone;
