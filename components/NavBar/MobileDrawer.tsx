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
import { HomeRounded, InfoRounded } from '@mui/icons-material';
import { useRouter } from 'next/router';

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
    <ListItem sx={{ paddingInline: 0 }}>
      <ListItemButton onClick={handleItemClick}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText sx={{ textTransform: 'capitalize' }} primary={name} />
      </ListItemButton>
    </ListItem>
  );
};

const MobileDrawer: FC<PropTypes> = (props) => {
  const { isOpen, setIsDrawerOpen } = props;
  const [navItems, setNavItems] = useState<NavItemType[]>([
    {
      path: '/',
      icon: <HomeRounded />,
      name: 'home',
    },
    {
      path: '/about',
      icon: <InfoRounded />,
      name: 'about',
    },
  ]);

  const handleClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <Drawer anchor="left" open={isOpen} onClose={handleClose}>
      <Box
        sx={{ width: 250 }}
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
