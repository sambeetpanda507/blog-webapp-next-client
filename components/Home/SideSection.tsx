import { FC } from 'react';
import { SearchSection } from './SearchSection';
import { CategorySection } from './CategorySection';
import { TagsSection } from './TagsSection';
import { LatestArticles } from './LatestArticles';

const SideSection: FC = () => {
  return (
    <div className="side-section text-gray-600 md:sticky md:top-4">
      <SearchSection />
      <CategorySection />
      <TagsSection />
      <LatestArticles />
    </div>
  );
};

export default SideSection;
