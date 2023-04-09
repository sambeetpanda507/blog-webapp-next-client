import React, { FC } from 'react';
import NavBar from '../NavBar';

type LayoutPropsType = {
  children: React.ReactNode;
};

const Layout: FC<LayoutPropsType> = (props) => {
  const { children } = props;

  return (
    <>
      <NavBar />
      <main className="container py-4">{children}</main>
    </>
  );
};

export default Layout;
