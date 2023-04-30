import { FC } from 'react';

type PropType = {
  color?: string;
  className?: string;
};

export const CloseIcon: FC<PropType> = (props) => {
  const { color = 'none', className } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={color}
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
};
