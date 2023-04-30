import { FC, useState, useEffect } from 'react';
import NavLink from './NavLink';
import { useRouter } from 'next/router';
import BrandLogo from '@/public/assets/brand_logo.png';
import Image, { StaticImageData } from 'next/image';
import { MenuIcon } from '../Icons';
import { CloseIcon } from '../Icons/CloseIcon';
import Link from 'next/link';
import HomeIcon from '@/public/assets/home_icon.png';
import AboutIcon from '@/public/assets/about_icon.png';
import AuthorIcon from '@/public/assets/author_icon.png';
import { NavLinkType } from '../../types';
import MobileDrawer from './MobileDrawer';

const NavBar: FC = () => {
  const [navLinks, setNavLinks] = useState<NavLinkType[]>([
    {
      name: 'Home',
      isActive: true,
      path: '/',
      icon: HomeIcon,
    },
    {
      name: 'About Us',
      isActive: false,
      path: '/about',
      icon: AboutIcon,
    },
    {
      name: 'Author',
      isActive: false,
      path: '/author',
      icon: AuthorIcon,
    },
  ]);
  const router = useRouter();
  const [isMenuClicked, setIsMenuClicked] = useState<boolean>(false);

  useEffect(() => {
    const path = router.pathname;
    setNavLinks((prev) => {
      return prev.map((x) => {
        if (x.path === path) {
          return { ...x, isActive: true };
        } else {
          return { ...x, isActive: false };
        }
      });
    });
  }, [router.pathname]);

  const handleMenuClick = () => {
    setIsMenuClicked((prev) => !prev);
  };

  return (
    <nav className="bg-neutral-900 text-white py-5 md:py-0 h-16 md:h-auto">
      <div className="container flex items-center">
        {/* MOBILE HAMBURGER MENU */}
        <div
          className="block md:hidden w-fit cursor-pointer hover:bg-slate-50/20 transition-all"
          onClick={handleMenuClick}
        >
          <MenuIcon />
        </div>

        {/* MOBILE MENU DRAWER */}
        {isMenuClicked && (
          <MobileDrawer handleMenuClick={handleMenuClick} navLinks={navLinks} />
        )}

        {/* LOGO */}
        <div className="ml-2 hidden md:block md:ml-0">
          <Image src={BrandLogo} height={40} width={35} alt="brand logo" />
        </div>

        {/* NAV LINKS */}
        <ul className="md:flex gap-5 ml-auto hidden">
          {navLinks.map((link) => {
            return (
              <NavLink
                key={link.name}
                name={link.name}
                path={link.path}
                isActive={link.isActive}
              />
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
