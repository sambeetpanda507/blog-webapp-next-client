import { FC, useRef, useEffect } from 'react';
import { CloseIcon } from '../Icons/CloseIcon';
import { NavLinkType } from '@/types';
import Image, { StaticImageData } from 'next/image';
import { useRouter } from 'next/router';

type PropType = {
  handleMenuClick: () => void;
  navLinks: NavLinkType[];
};

const LinkItem: FC<{
  handleMenuClick: () => void;
  name: string;
  icon: StaticImageData;
  path: string;
}> = (props) => {
  const { handleMenuClick, name, icon, path } = props;
  const router = useRouter();

  const handleLinkClick = () => {
    router.push(path);
    handleMenuClick();
  };

  return (
    <li
      key={name}
      className="flex items-center gap-2 mb-6 py-2 pl-1 hover:bg-slate-50/30 cursor-pointer"
      onClick={handleLinkClick}
    >
      <Image src={icon} alt={`icon-${name}`} height={23} width={23} />
      {name}
    </li>
  );
};

const MobileDrawer: FC<PropType> = (props) => {
  const { handleMenuClick, navLinks } = props;
  const drawerContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        drawerContainerRef.current &&
        !drawerContainerRef.current.contains(event.target as Node)
      ) {
        handleMenuClick();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleMenuClick]);

  return (
    <div className="w-screen fixed top-0 left-0 h-screen bg-neutral-900/60 md:hidden">
      {/* DRAWER CONTAINER */}
      <div
        ref={drawerContainerRef}
        className="relative w-3/4 h-screen bg-neutral-900 px-4"
      >
        {/* DRAWER ACTION CONTAINER */}
        <div
          className="flex justify-end items-center py-4"
          onClick={handleMenuClick}
        >
          <CloseIcon color="white" className={'h-6 w-6 cursor-pointer'} />
        </div>

        <ul className="text-white">
          {navLinks.map((link) => {
            return (
              <LinkItem
                key={link.name}
                name={link.name}
                icon={link.icon}
                path={link.path}
                handleMenuClick={handleMenuClick}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MobileDrawer;
