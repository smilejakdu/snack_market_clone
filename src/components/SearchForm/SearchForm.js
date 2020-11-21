import React, { useState } from 'react';
import { SearchFormBlock } from './SearchForm.style';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SearchForm = () => {

  const [value, setValue] = useState('')

  return (
    <SearchFormBlock>
      <form>
        
        <label htmlFor="name">
          <input type="radio" id="name" name="type" value="name" />
          이름
        </label>
        <label htmlFor="title">
          <input type="radio" id="title" name="type" value="title" defaultChecked/>
          제목
        </label>
        <label htmlFor="content">
          <input type="radio" id="content" name="type" value="content" />
          내용
        </label>
        <input 
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button><FontAwesomeIcon icon={faSearch} /></button>
      </form>
    </SearchFormBlock>
  );
};

export default SearchForm;