import { StaticImageData } from 'next/image';

export type NavLinkType = {
  name: string;
  isActive: boolean;
  path: string;
  icon: StaticImageData;
};
