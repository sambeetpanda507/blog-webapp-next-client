import React, { MouseEventHandler, ReactElement, useMemo } from 'react';

type PropsType = {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  children: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'text' | 'contained' | 'outlined';
  size?: 'sm' | 'md' | 'lg';
  rounded?: boolean;
  className?: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
};

export default function Button(props: PropsType) {
  const {
    type = 'button',
    size = 'md',
    variant = 'text',
    rounded = true,
    className = '',
    startIcon,
    endIcon,
    children,
    ...others
  } = props;

  const padding = useMemo(() => {
    if (size === 'sm') {
      return 'px-2 py-[0.375rem] text-xs';
    } else if (size === 'lg') {
      return 'px-5 py-[0.625rem] font-bold';
    }
    return 'px-3 py-2 text-sm font-semibold';
  }, [size]);

  const background = useMemo(() => {
    if (variant === 'contained') {
      return `bg-neutral-700 hover:bg-neutral-900 text-white hover:shadow transition duration-300`;
    } else if (variant === 'outlined') {
      return `border border-neutral-700 text-neutral-700 hover:bg-neutral-100 hover:border-neutral-900 transition duration-300`;
    }
    return 'hover:bg-neutral-100 transition duration-300 ';
  }, [variant]);

  return (
    <button
      type={type}
      className={`${padding} ${background} ${
        rounded ? 'rounded-full' : 'rounded'
      } ${className}`}
      {...others}
    >
      <span className="flex gap-1 items-center justify-center">
        {startIcon ?? ''}
        {children}
        {endIcon ?? ''}
      </span>
    </button>
  );
}
