import { FC } from 'react';
import Image from 'next/image';
import { ArticleImagePropType } from './types';

export const ArticleImage: FC<ArticleImagePropType> = (props) => {
  const { imgURL, alt } = props;
  return (
    <div className="relative h-16 w-16 shrink-0">
      <Image
        src={imgURL}
        alt={alt}
        className="rounded-full object-cover"
        fill
      />
    </div>
  );
};
