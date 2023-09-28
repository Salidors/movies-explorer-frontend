import React, { useState } from 'react';
import './SearchForm.css';
import Toggle from '../../Toggle/Toggle';

export default function SearchForm({ onSearch }) {
  const [isToggled, setIsToggled] = useState(true);

  return (
    <form className='form-search'>
      <div className='form-search__container'>
        <input
          type='text'
          className='form-search__container-input'
          placeholder='Фильм'
        />
        <button className='form-search__container-button' onClick={onSearch}>
          Найти
        </button>
      </div>
      <Toggle isOn={isToggled} onChange={() => setIsToggled(!isToggled)} />
    </form>
  );
}
