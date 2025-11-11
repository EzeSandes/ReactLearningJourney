import React, { useState } from 'react';
import './Form.css';

function Form({ onSearch }) {
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSearch(searchValue);
    setSearchValue('');
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <div className='form__input-container'>
        <input
          type='text'
          className='form__input-container__input'
          placeholder='Seach for a city...'
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
        />
        <button type='submit' className='form__input-container__button'>
          Search
        </button>
      </div>
    </form>
  );
}

export default Form;
