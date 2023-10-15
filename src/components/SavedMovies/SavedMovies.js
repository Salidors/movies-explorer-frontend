import React, { useCallback, useState } from 'react';
import './SavedMovies.css';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import { deleteMovie, filterMovies } from '../../utils/MoviesApi';
import { useFavoriteMovies } from '../hooks/useFavoriteMovies';

export default function SavedMovies({ config }) {
  const [count, setCount] = useState(config.moviesPerPage);
  const { favoriteMovies, setFavoriteMovies } = useFavoriteMovies();

  const [movies, setMovies] = useState([]);

  const handleOnSearch = useCallback(
    (value) => {
      const filteredMovies = filterMovies({ movies: favoriteMovies, ...value });
      setMovies(filteredMovies);
      setCount(config.moviesPerPage);
    },
    [config.moviesPerPage, favoriteMovies]
  );

  const handleOnMore = () => {
    setCount((state) => state + config.moreMovies);
  };

  const _movies = movies.slice(0, count);

  const isMore = count < movies.length;
  const isEmpty = Boolean(!movies.length);

  const handleOnDislike = useCallback(
    ({ _id }) => {
      deleteMovie(_id).then(() => {
        setMovies((state) => state.filter((movie) => movie._id !== _id));
        setFavoriteMovies((state) =>
          state.filter((movie) => movie._id !== _id)
        );
      });
    },
    [setFavoriteMovies]
  );

  return (
    <main className='movies-page'>
      <SearchForm onChange={handleOnSearch} />
      {isEmpty && <p className='movies-page__empty'>Ничего не найдено</p>}
      {!isEmpty && (
        <MoviesCardList
          movies={_movies}
          onMore={isMore ? handleOnMore : undefined}
          onLike={handleOnDislike}
          favorites={true}
        />
      )}
    </main>
  );
}
