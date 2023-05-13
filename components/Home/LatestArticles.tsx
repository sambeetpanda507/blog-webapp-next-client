import { FC, useEffect, useState } from 'react';
import { SectionContainer } from './SectionContainer';
import { SectionHeading } from './SectionHeading';
import { ArticleContainerPropType } from './types';
import { ArticleContainer } from './ArticleContainer';

type ArticleType = ArticleContainerPropType;

export const LatestArticles: FC = () => {
  const [articles, setArticles] = useState<ArticleType[]>([]);

  useEffect(() => {
    setArticles([
      {
        id: 1,
        title:
          'Unlocking the Power of Positive Thinking: How to Transform Your Mindset for Success',
        imgURL: 'https://picsum.photos/600/600?random=1',
        alt: 'article 1',
        datePublished: 'March 15, 2020',
      },
      {
        id: 2,
        title:
          'The Ultimate Guide to Sustainable Living: Simple Steps to Make a Positive Impact',
        imgURL: 'https://picsum.photos/600/600?random=2',
        alt: 'article 2',
        datePublished: 'March 15, 2020',
      },
      {
        id: 3,
        title:
          'The Art of Effective Communication: Building Stronger Relationships Through Better Interactions',
        imgURL: 'https://picsum.photos/600/600?random=3',
        alt: 'article 3',
        datePublished: 'March 15, 2020',
      },
      {
        id: 4,
        title:
          'Exploring Mindfulness: Cultivating Present-Moment Awareness for a Balanced Life',
        imgURL: 'https://picsum.photos/600/600?random=4',
        alt: 'article 4',
        datePublished: 'March 15, 2020',
      },
      {
        id: 5,
        title:
          'Mastering Time Management: Strategies to Boost Productivity and Achieve Your Goals',
        imgURL: 'https://picsum.photos/600/600?random=5',
        alt: 'article 5',
        datePublished: 'March 15, 2020',
      },
    ]);
  }, []);

  return (
    <SectionContainer>
      <SectionHeading style={{ flexShrink: '0' }} heading="Latest Articles" />
      {articles.map((article) => {
        return (
          <ArticleContainer
            key={`article-%${article.id}`}
            id={article.id}
            title={article.title}
            imgURL={article.imgURL}
            alt={article.alt}
            datePublished={article.datePublished}
          />
        );
      })}
    </SectionContainer>
  );
};
