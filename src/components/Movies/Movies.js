import React, { useCallback, useState } from 'react';
import './Movies.css';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Preloader from './Preloader/Preloader';
import { useMovies } from '../../utils/MoviesApi';

export default function Movies({ config }) {
  const [filter, setFilter] = useState('');
  const [count, setCount] = useState(config.moviesPerPage);
  const { isLoading, movies = [], error } = useMovies(filter);

  const handleOnSearch = useCallback(
    (value) => {
      setFilter(value);
      setCount(config.moviesPerPage);
    },
    [config.moviesPerPage]
  );

  const handleOnMore = () => {
    setCount((state) => state + config.moreMovies);
  };

  const _movies = movies.slice(0, count);

  const isMore = count < movies.length;
  const isEmpty = Boolean(!movies.length && filter && !isLoading && !error);

  return (
    <main className='movies-page'>
      <SearchForm onSearch={handleOnSearch} />
      {isEmpty && <p className='movies-page__empty'>Ничего не найдено</p>}
      {isLoading && <Preloader />}
      {error && <div>{error}</div>}
      {!isLoading && !error && (
        <MoviesCardList
          movies={_movies}
          onMore={isMore ? handleOnMore : undefined}
        />
      )}
    </main>
  );
}
