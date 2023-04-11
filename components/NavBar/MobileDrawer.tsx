import { ReactElement, FC, Dispatch, SetStateAction, useState } from 'react';
import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from '@mui/material';
import { useRouter } from 'next/router';
import { HomeIcon, InfoIcon } from '../icons';

type PropTypes = {
  isOpen: boolean;
  setIsDrawerOpen: Dispatch<SetStateAction<boolean>>;
};

type NavItemType = {
  path: string;
  icon: ReactElement;
  name: string;
};

const DrawerItem: FC<NavItemType> = (props) => {
  const { path, icon, name } = props;
  const router = useRouter();

  const handleItemClick = () => {
    router.push(path);
  };

  return (
    <ListItem className="px-0">
      <ListItemButton onClick={handleItemClick}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={name} className="capitalize" />
      </ListItemButton>
    </ListItem>
  );
};

const MobileDrawer: FC<PropTypes> = (props) => {
  const { isOpen, setIsDrawerOpen } = props;
  const [navItems, setNavItems] = useState<NavItemType[]>([
    {
      path: '/',
      icon: <HomeIcon />,
      name: 'home',
    },
    {
      path: '/about',
      icon: <InfoIcon />,
      name: 'about',
    },
  ]);

  const handleClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <Drawer anchor="left" open={isOpen} onClose={handleClose}>
      <Box
        className="w-64"
        role="presentation"
        onClick={handleClose}
        onKeyDown={handleClose}
      >
        <List>
          {navItems.map((item) => {
            return (
              <DrawerItem
                key={item.name}
                icon={item.icon}
                path={item.path}
                name={item.name}
              />
            );
          })}
        </List>
      </Box>
    </Drawer>
  );
};

export default MobileDrawer;
