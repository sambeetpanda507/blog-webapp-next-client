import { FC } from 'react';
import { ArticleSummaryBoxPropType } from './types';

export const ArticleSummaryBox: FC<ArticleSummaryBoxPropType> = (props) => {
  const { title, datePublished } = props;
  return (
    <div>
      <p className="capitalize font-semibold">{title}</p>
      <span className="text-xs text-gray-500">{datePublished}</span>
    </div>
  );
};
