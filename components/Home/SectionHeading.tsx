import { CSSProperties, FC } from 'react';

export const SectionHeading: FC<{ heading: string; style?: CSSProperties }> = (
  props
) => {
  const { heading, style } = props;
  return (
    <div className="flex items-center gap-2">
      <p
        style={style}
        className="font-semibold text-lg md:text-xl text-gray-600"
      >
        {heading}
      </p>
      <span className="h-[0.5px] w-full bg-gray-300 block"></span>
    </div>
  );
};
