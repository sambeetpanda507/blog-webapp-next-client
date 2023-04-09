import { FC } from 'react';
import Link from 'next/link';

type PropsType = {
  name: string;
  path: string;
  isActive: boolean;
};

const NavLink: FC<PropsType> = (props) => {
  const { name, path, isActive } = props;
  return (
    <li
      className={`py-5 px-4 bg-green-200 ${
        isActive
          ? 'bg-neutral-800 border-b-4 border-white'
          : 'bg-neutral-900 border-transparent'
      }`}
    >
      <Link href={path}>{name}</Link>
    </li>
  );
};

export default NavLink;
