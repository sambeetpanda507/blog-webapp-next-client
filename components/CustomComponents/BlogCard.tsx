import { FC } from 'react';
import Image from 'next/image';
import UserIcon from '../Icons/UserIcon';
import Button from './Button';

const CardImgContainer: FC = () => {
  return (
    <div className="card-image-container">
      <Image
        src="https://picsum.photos/800/600?random=16"
        alt="card image"
        width={400}
        height={400}
        className="w-full h-auto top-0 left-0 object-cover rounded-md"
        priority
      />
    </div>
  );
};

const CardTitle: FC = () => {
  return (
    <h2 className="card-title font-semibold font-serif text-lg md:text-xl mt-2">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, enim?
    </h2>
  );
};

const CardAbout: FC = () => {
  return (
    <span className="card-about flex flex-wrap text-sm font-light my-2">
      <span className="written-by flex items-center">
        <UserIcon className="h-4 w-4" />
        John Doe
      </span>
      <span className="date-writtenl">Date: May 13, 2023</span>
      <span className="category-name">Photography: Photo, Image</span>
    </span>
  );
};

const CardSummary: FC = () => {
  return (
    <p className="card-summary mt-4 text-md">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
      molestiae nulla qui nobis commodi soluta, ducimus eveniet esse minus
      reiciendis? Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Suscipit molestiae nulla qui nobis commodi soluta, ducimus eveniet esse
      minus reiciendis? Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Suscipit molestiae nulla qui nobis commodi soluta, ducimus eveniet esse
      minus reiciendis?
    </p>
  );
};

const ButtonGroup: FC = () => {
  return (
    <div className="button-group mt-4">
      <Button variant="outlined" size="lg">
        Continue Reading
      </Button>
    </div>
  );
};

const CardBody: FC = () => {
  return (
    <div className="card-body">
      <CardTitle />
      <CardAbout />
      <CardSummary />
      <ButtonGroup />
    </div>
  );
};

export const BlogCard: FC = () => {
  return (
    <div className="blog-card-container mb-4 text-gray-600">
      <CardImgContainer />
      <CardBody />
    </div>
  );
};
