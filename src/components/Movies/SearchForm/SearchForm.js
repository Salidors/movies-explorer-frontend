import React, { useEffect, useRef, useState } from 'react';
import './SearchForm.css';
import Toggle from '../../Toggle/Toggle';
import {
  saveAllMoviesSearch,
  getAllMoviesSearch,
} from '../../../utils/localStorage';
import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

export default function SearchForm({ onSearch, onToggle }) {
  const { pathname } = useLocation();
  const { switcher, filter } = useMemo(
    () =>
      pathname === '/movies'
        ? getAllMoviesSearch()
        : { switcher: true, filter: '' },
    [pathname]
  );

  const refForm = useRef(null);
  const [isToggled, setIsToggled] = useState(switcher);
  const [error, setError] = useState();

  const [search, setSearch] = useState(filter);

  const handleOnNameChange = (event) => {
    if (refForm.current.checkValidity()) setError('');
    else setError('Нужно ввести ключевое слово');
    const { value } = event.currentTarget;
    setSearch(value);
  };

  const handleOnSearch = () => {
    onSearch(search, isToggled);
  };

  useEffect(() => {
    if (pathname === '/movies')
      saveAllMoviesSearch({ filter: search, switcher: isToggled });
  }, [isToggled, search, pathname]);

  useEffect(() => {
    onToggle(isToggled);
  }, [isToggled, onToggle]);

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
