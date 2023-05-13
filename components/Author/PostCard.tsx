import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';
import Avatar from './Avatar';
import Link from 'next/link';
import { BookmarkIcon } from '../Icons';

type Author = {
  name: string;
  avatarUrl: string | StaticImageData;
};

type PropsType = {
  id: string;
  title: string;
  details: string;
  imgUrl: string;
  author: Author;
  publishedAt: string;
  readTime: number;
};

const PostCard: FC<PropsType> = (props) => {
  const { id, title, imgUrl, details, author, publishedAt, readTime } = props;
  return (
    <div className="rounded shadow-md my-6">
      <div className="relative block h-64 md:h-96">
        <Image
          src={imgUrl}
          alt={title}
          fill
          className="rounded-tl rounded-tr object-cover object-center"
          priority
        />
      </div>
      <div className="p-4">
        <Link href={`/post/${id}`}>
          <h1 className="text-2xl font-bold line-clamp-1">{title}</h1>
        </Link>
        <p className="text-gray-500 mt-2 leading-tight line-clamp-2">
          {details}
        </p>
        <div className="flex justify-between items-center mt-3">
          <div className="flex space-x-3">
            <Avatar url={author.avatarUrl} alt={author.name} />
            <div>
              <h3>{author.name}</h3>
              <p className='text-sm'>
                {publishedAt}{' '}
                <span className="text-gray-500">
                  &#x2022; {readTime} min read
                </span>
              </p>
            </div>
          </div>
          <BookmarkIcon color='gray'/>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
