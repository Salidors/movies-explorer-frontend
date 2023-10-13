import React, { useRef, useState } from 'react';
import './SearchForm.css';
import Toggle from '../../Toggle/Toggle';

export default function SearchForm({ onSearch }) {
  const refForm = useRef(null);
  const [isToggled, setIsToggled] = useState(true);
  const [error, setError] = useState();

  const [search, setSearch] = useState('');

  const handleOnNameChange = (event) => {
    if (refForm.current.checkValidity()) setError('');
    else setError(event.target.validationMessage);
    const { value } = event.currentTarget;
    setSearch(value);
  };

  const handleOnSearch = () => {
    onSearch(search);
  };

  const isSubmitDisabled = Boolean(error);
  return (
    <section className='form-search'>
      <form
        className='form-search__container'
        ref={refForm}
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <input
          type='text'
          className='form-search__container-input'
          placeholder='Фильм'
          required
          value={search}
          onChange={handleOnNameChange}
          minLength={2}
          maxLength={30}
        />
        <button
          className='btn form-search__container-button'
          onClick={handleOnSearch}
          type='button'
          disabled={isSubmitDisabled}
        >
          Найти
        </button>
        <p className='form-search__error'>{error}</p>
        <Toggle isOn={isToggled} onChange={() => setIsToggled(!isToggled)} />
      </form>
    </section>
  );
}
