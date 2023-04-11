import { FC, useState, useEffect } from 'react';
import NavLink from './NavLink';
import { useRouter } from 'next/router';
import { IconButton, Box } from '@mui/material';
import { Menu } from '@mui/icons-material';
import MobileDrawer from './MobileDrawer';
import BrandLogo from '@/public/assets/brand_logo.png';
import Image from 'next/image';

type NavLinkType = {
  name: string;
  isActive: boolean;
  path: string;
};

const NavBar: FC = () => {
  const [navLinks, setNavLinks] = useState<NavLinkType[]>([
    {
      name: 'Home',
      isActive: true,
      path: '/',
    },
    {
      name: 'About Us',
      isActive: false,
      path: '/about',
    },
  ]);
  const router = useRouter();
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

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
    setIsDrawerOpen((prev) => !prev);
  };

  return (
    <nav className="bg-neutral-900 text-white py-5 md:py-0">
      <div className="container flex items-center">
        {/* MOBILE HAMBURGER MENU */}
        <IconButton
          size="small"
          className="-ml-2 md:hidden"
          onClick={handleMenuClick}
        >
          <Menu className="text-white" />
        </IconButton>

        {/* MOBILE DRAWER */}
        <Box>
          <MobileDrawer
            isOpen={isDrawerOpen}
            setIsDrawerOpen={setIsDrawerOpen}
          />
        </Box>

        {/* LOGO */}
        <div className="ml-2 md:ml-0">
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
