import { FC, ReactNode } from 'react';

export const SectionContainer: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="mt-10">{children}</div>;
};
