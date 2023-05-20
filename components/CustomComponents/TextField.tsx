import { CSSProperties, ChangeEvent, FC, useMemo } from 'react';

type InputProps = {
  type: 'text' | 'password' | 'number' | 'email';
  label?: string;
  placeholder?: string;
  name: string;
  htmlFor: string;
  id: string;
  value: string | number | readonly string[] | undefined;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  style?: CSSProperties;
  required?: boolean;
  isError?: boolean;
  errMsg?: string;
  endIcon?: React.ReactElement;
  size?: 'small' | 'large';
  variant?: 'outlined' | 'underlined';
};

export const Input: FC<InputProps> = (props) => {
  const {
    type,
    htmlFor,
    name,
    id,
    style,
    required = false,
    label,
    value,
    handleChange,
    isError,
    errMsg,
    placeholder = '',
    endIcon,
    size = 'large',
    variant = 'outlined',
  } = props;

  const isValue = useMemo(() => {
    if (value) return true;
    else return false;
  }, [value]);

  return (
    <div>
      <div
        data-group-name="name"
        className={`relative transition-all duration-200 group ${
          variant === 'outlined' ? 'border-2' : 'border-b-2'
        } ${isError ? 'border-red-500' : 'border-gray-500/80'}  hover:${
          isError ? 'border-red-500' : 'border-gray-800/80'
        } focus-within:${isError ? 'border-red-500' : 'border-gray-800/80'} ${
          size === 'small' ? 'px-2.5 py-3.5' : 'p-3.5'
        } ${
          variant === 'outlined' ? 'rounded-md' : 'rounded-none'
        } flex justify-between items-center`}
        style={style}
      >
        <input
          type={type}
          name={name}
          id={id}
          className={`border-none bg-transparent outline-none w-full ${
            size === 'small' ? 'text-sm' : 'text-lg'
          } cursor-text grow`}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          required={required}
        />
        {endIcon && <div>{endIcon}</div>}
        {label && placeholder.length === 0 && (
          <label
            htmlFor={htmlFor}
            className={`absolute transition-all duration-200 ${
              isValue
                ? '-top-[3px] bg-white text-sm'
                : `top-1/2 bg-transparent ${
                    size === 'small' ? 'text-sm' : 'text-lg'
                  }`
            } ${size === 'small' ? 'left-2.5' : 'left-3.5'} -translate-y-1/2 ${
              isError ? 'text-red-500' : 'text-gray-500/80'
            } font-semibold group-hover:${
              isError ? 'text-red-500' : 'text-gray-800/80'
            } group-focus-within:-top-[3px] group-focus-within:text-sm group-focus-within:bg-white group-focus-within:${
              isError ? 'text-red-500' : 'text-gray-800/80'
            }`}
          >
            {label}
            {required && '*'}
          </label>
        )}
      </div>
      {isError && (
        <small className="text-red-500 font-semibold">{errMsg}</small>
      )}
    </div>
  );
};
