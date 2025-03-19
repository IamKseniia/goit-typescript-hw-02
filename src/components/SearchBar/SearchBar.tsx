import { useState } from 'react';
import toast from 'react-hot-toast';
import s from './SearchBar.module.css';
import { SearchBarProps } from '../../services/types';

const SearchBar: React.FC<SearchBarProps> = ({ handleSetQuery }) => {
  const [value, setValue] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.length > 0) {
      handleSetQuery(value);
    } else {
      toast.error('Entered nothing. Received nothing.', {});
    }
  };

  return (
    <div className={s.wrapper}>
      <form onSubmit={handleSubmit}>
        <button className={s.formBtn}>Search</button>
        <input
          onChange={e => setValue(e.target.value)}
          value={value}
          type="text"
          name="search"
          autoComplete="off"
          placeholder="Search images and photos"
        />
      </form>
    </div>
  );
};

export default SearchBar;
