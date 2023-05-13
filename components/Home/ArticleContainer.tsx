import { FC } from 'react';
import { ArticleImage } from './ArticleImage';
import { ArticleSummaryBox } from './ArticleSummaryBox';
import { ArticleContainerPropType } from './types';

export const ArticleContainer: FC<ArticleContainerPropType> = (props) => {
  const { title, imgURL, alt, datePublished } = props;
  return (
    <div className="flex gap-2 my-4">
      <ArticleImage imgURL={imgURL} alt={alt} />
      <ArticleSummaryBox title={title} datePublished={datePublished} />
    </div>
  );
};
