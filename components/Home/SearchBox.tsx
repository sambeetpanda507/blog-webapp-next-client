import { ChangeEvent, FC, useState, useEffect, useDeferredValue } from 'react';
import SearchIcon from '../Icons/SearchIcon';

type SearchBoxPropType = {
  isHidden: boolean;
};

const SearchBox: FC<SearchBoxPropType> = (props) => {
  const { isHidden } = props;
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    let willUnmount: boolean = false;
    if (willUnmount || search.trim().length === 0) return;
    let timeoutId: NodeJS.Timeout = setTimeout(() => {
      console.log(search);
    }, 1200);
    return () => {
      clearTimeout(timeoutId);
      willUnmount = true;
    };
  }, [search]);

  const handleFocusIn = () => {
    setIsFocused(true);
  };

  const handleFocusOut = () => {
    setIsFocused(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div
      className={`search-box transition-all border-b-2 ${
        isFocused ? 'border-gray-700' : 'border-gray-400'
      } flex gap-1 justify-between items-center md:mt-3 pt-2 pb-1 mb-2 ${
        !isHidden && 'md:hidden'
      }`}
    >
      <input
        type="text"
        name="search"
        id="search"
        value={search}
        placeholder="Type and Search..."
        className="flex-grow outline-none border-0"
        onFocus={handleFocusIn}
        onBlur={handleFocusOut}
        onChange={handleChange}
      />
      <SearchIcon
        className="w-5 h-5 transition"
        stroke={isFocused ? '#374151' : '#9ca3af'}
      />
    </div>
  );
};

export default SearchBox;
