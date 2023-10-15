import React, { useCallback, useState } from 'react';
import './SavedMovies.css';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import { deleteMovie, filterMovies } from '../../utils/MoviesApi';
import { useFavoriteMovies } from '../hooks/useFavoriteMovies';

export default function SavedMovies({ config }) {
  const [filter, setFilter] = useState();
  const [count, setCount] = useState(config.moviesPerPage);
  const { favoriteMovies, setFavoriteMovies } = useFavoriteMovies();
  const filteredMovies = filterMovies({
    movies: favoriteMovies,
    ...filter,
  });

  const handleOnSearch = useCallback(
    (value) => {
      setFilter((state) => ({ ...state, search: value }));
      setCount(config.moviesPerPage);
    },
    [config.moviesPerPage]
  );

  const handleOnMore = () => {
    setCount((state) => state + config.moreMovies);
  };

  const _movies = filteredMovies.slice(0, count);

  const isMore = count < filteredMovies.length;
  const isEmpty = Boolean(!filteredMovies.length);

  const handleOnDisLike = useCallback(
    ({ _id }) => {
      deleteMovie(_id).then(() => {
        setFavoriteMovies((state) =>
          state.filter((movie) => movie._id !== _id)
        );
      });
    },
    [setFavoriteMovies]
  );

  const handleOnToggle = useCallback(
    (value) => {
      setFilter((state) => ({ ...state, switcher: value }));
      setCount(config.moviesPerPage);
    },
    [config.moviesPerPage]
  );

  return (
    <main className='movies-page'>
      <SearchForm onSearch={handleOnSearch} onToggle={handleOnToggle} />
      {isEmpty && <p className='movies-page__empty'>Ничего не найдено</p>}
      {!isEmpty && (
        <MoviesCardList
          movies={_movies}
          onMore={isMore ? handleOnMore : undefined}
          onLike={handleOnDisLike}
          favorites={true}
        />
      )}
    </main>
  );
}
