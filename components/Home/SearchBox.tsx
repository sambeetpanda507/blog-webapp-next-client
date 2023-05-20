import { ChangeEvent, FC, useState, useEffect, useDeferredValue } from 'react';
import SearchIcon from '../Icons/SearchIcon';
import { TextField } from '../CustomComponents';

type SearchBoxPropType = {
  isHidden: boolean;
};

const SearchBox: FC<SearchBoxPropType> = (props) => {
  const { isHidden } = props;
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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div
      className={`search-box md:mt-3 pt-2 pb-1 mb-2 ${
        !isHidden && 'md:hidden'
      }`}
    >
      <TextField
        htmlFor="search"
        type="text"
        name="search"
        id="search"
        value={search}
        placeholder="Type and Search..."
        handleChange={handleChange}
        endIcon={<SearchIcon className="w-5 h-5 transition" stroke="#374151" />}
        size="small"
      />
    </div>
  );
};

export default SearchBox;
