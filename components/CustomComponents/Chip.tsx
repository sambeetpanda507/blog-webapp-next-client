import { FC } from 'react';

type ChipPropType = {
  title: string;
  filled?: boolean;
};

export const Chip: FC<ChipPropType> = (props) => {
  const { title, filled = false } = props;
  return (
    <span
      className={`rounded-full transition duration-300 cursor-pointer hover:bg-gray-200 ${
        filled ? 'font-semibold' : 'font-normal'
      } border-2 border-slate-300/60 px-3 py-2 text-sm ${
        filled && 'bg-gray-200'
      }`}
    >
      {title}
    </span>
  );
};
