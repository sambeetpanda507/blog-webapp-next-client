import { FC, useState, useEffect } from 'react';
import { Chip } from '../CustomComponents';
import { SectionHeading } from './SectionHeading';
import { ITag } from './interfaces';
import { SectionContainer } from './SectionContainer';

export const TagsSection: FC = () => {
  const [tags, setTags] = useState<ITag[]>([]);
  useEffect(() => {
    setTags([
      {
        id: 1,
        name: 'Boot',
      },
      {
        id: 2,
        name: 'City',
      },
      {
        id: 3,
        name: 'Image',
      },
      {
        id: 4,
        name: 'New',
      },
      {
        id: 5,
        name: 'Photo',
      },
      {
        id: 6,
        name: 'Network',
      },
    ]);
  }, []);
  return (
    <SectionContainer>
      <SectionHeading heading="Tags" />
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => {
          return <Chip key={`tag-${tag.id}`} title={tag.name} />;
        })}
      </div>
    </SectionContainer>
  );
};
