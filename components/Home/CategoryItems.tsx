import { FC, useState, useEffect } from 'react';
import { ICategory } from './interfaces';

const CategoryItem: FC<ICategory> = (props) => {
  const { name, totalItems } = props;
  return (
    <li className="flex justify-between border-b-[1px] border-gray-300 mb-3">
      <span>{name}</span>
      <span>&#10088;{totalItems}&#10089;</span>
    </li>
  );
};

export const CategorieItems: FC = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  useEffect(() => {
    setCategories([
      { id: 1, name: 'Photography', totalItems: 5 },
      { id: 2, name: 'Videography', totalItems: 4 },
      { id: 3, name: 'It & Software', totalItems: 10 },
      { id: 4, name: 'Lifestyle', totalItems: 15 },
    ]);
  }, []);
  return (
    <ul className="mt-4">
      {categories.map((category) => {
        return (
          <CategoryItem
            key={`category-${category.id}`}
            id={category.id}
            name={category.name}
            totalItems={category.totalItems}
          />
        );
      })}
    </ul>
  );
};
