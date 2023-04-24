import { FC, ReactNode } from 'react';
import Avatar from './Avatar';
import { StaticImageData } from 'next/image';

type SocialSite = {
  icon: ReactNode;
  url: string;
}

type PropsType = {
  name: string;
  description: string;
  socialSites: SocialSite[];
  avatarUrl: string | StaticImageData;
}

const AuthorCard: FC<PropsType> = (props) => {
  const {name, description, socialSites, avatarUrl} = props
  return (
    <div className="text-center py-2 md:text-left md:py-6 md:flex md:justify-between md:items-center md:space-x-4">
      <div>
        <h1 className="text-2xl font-bold mb-3">{name}</h1>
        <p className="text-gray-800">{description}</p>
        <div className="flex justify-center md:justify-start space-x-3 mt-3">
          {socialSites.map((socialSite, index) => (
            <a key={index} href={socialSite.url} className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-700">{socialSite.icon}</a>
          ))}
        </div>
      </div>
      <div className="shrink-0 mt-4 md:mt-0">
        <Avatar url={avatarUrl} alt={name} size='lg' />
      </div>
    </div>
  );
};

export default AuthorCard
