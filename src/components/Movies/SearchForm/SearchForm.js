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

  const isFormValid = refForm.current && refForm.current.checkValidity();
  const isSubmitDisabled = Boolean(!isFormValid);

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
        />
        <button
          className='form-search__container-button'
          onClick={handleOnSearch}
          type='button'
          disabled={isSubmitDisabled}
        >
          Найти
        </button>
      </form>
      <p className='form-search__error'>{error}</p>
      <Toggle isOn={isToggled} onChange={() => setIsToggled(!isToggled)} />
    </section>
  );
}
