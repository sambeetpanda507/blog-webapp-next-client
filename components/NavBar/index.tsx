import { FC, useState, useEffect } from 'react';
import NavLink from './NavLink';
import { useRouter } from 'next/router';

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

  return (
    <nav className="bg-neutral-900 text-white">
      <div className="container flex items-center mx-auto">
        {/* LOGO */}
        <div>Logo Here</div>

        {/* NAV LINKS */}
        <ul className="flex gap-5 ml-auto">
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
