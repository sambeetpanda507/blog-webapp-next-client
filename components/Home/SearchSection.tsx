import { FC } from 'react';
import SearchBox from './SearchBox';
import { SectionHeading } from './SectionHeading';

export const SearchSection: FC = (props) => {
  return (
    <div>
      <SectionHeading heading="Search" />
      <SearchBox isHidden={true} />
    </div>
  );
};
