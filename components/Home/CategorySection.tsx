import { FC } from 'react';
import { CategorieItems } from './CategoryItems';
import { SectionHeading } from './SectionHeading';
import { SectionContainer } from './SectionContainer';

export const CategorySection: FC = () => {
  return (
    <SectionContainer>
      <SectionHeading heading="Category" />
      <CategorieItems />
    </SectionContainer>
  );
};
