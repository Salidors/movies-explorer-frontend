import React, { useCallback, useEffect, useState } from 'react';
import './Movies.css';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Preloader from './Preloader/Preloader';
import { fetchMovies, filterMovies, saveMovie } from '../../utils/MoviesApi';
import { useFavoriteMovies } from '../hooks/useFavoriteMovies';
import {
  getFoundMovies,
  getServerMovies,
  saveServerMovies,
  saveFoundMovies,
  getAllMoviesSearch,
} from '../../utils/localStorage';
import { MOVIES_API_URL } from '../constants/constants';

export default function Movies({ config }) {
  const { setFavoriteMovies } = useFavoriteMovies();

  const [serverMovies, setServerMovies] = useState(getServerMovies());

  const [movies, setMovies] = useState([]);
  const [error, setError] = useState();
  const [isLoading, setLoading] = useState(false);

  const [count, setCount] = useState(config.moviesPerPage);

  useEffect(() => {
    if (serverMovies) return;
    setError('');
    setLoading(true);
    fetchMovies()
      .then((data) => {
        const _data = data.map((d) => ({
          ...d,
          image: `${MOVIES_API_URL}${d.image.url}`,
          thumbnail: `${MOVIES_API_URL}${d.image.previewUrl}`,
        }));
        saveServerMovies(_data);
        setServerMovies(_data);
      })
      .catch(() => {
        setError(
          'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.'
        );
      })
      .finally(() => setLoading(false));
  }, [serverMovies]);

  const handleOnSearch = useCallback(
    (value) => {
      const filteredMovies = filterMovies({ movies: serverMovies, ...value });
      saveFoundMovies(filteredMovies);

      setMovies(filteredMovies);
      setCount(config.moviesPerPage);
    },
    [config.moviesPerPage, serverMovies]
  );

  const handleOnMore = () => {
    setCount((state) => state + config.moreMovies);
  };

  const _movies = movies.slice(0, count);

  const isMore = count < movies.length;
  const isEmpty = Boolean(!movies.length && !isLoading && !error);

  const handleOnLike = useCallback(
    (data) => {
      saveMovie({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: data.image,
        trailerLink: data.trailerLink,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
        thumbnail: data.thumbnail,
        movieId: data.id,
      }).then((movie) => {
        setFavoriteMovies((state) => [...state, movie]);
      });
    },
    [setFavoriteMovies]
  );

  useEffect(() => {
    if (getAllMoviesSearch().filter) setMovies(getFoundMovies());
  }, []);

  return (
    <main className='movies-page'>
      <SearchForm onChange={handleOnSearch} />
      {isEmpty && <p className='movies-page__empty'>Ничего не найдено</p>}
      {isLoading && <Preloader />}
      {error && <div>{error}</div>}
      {!isLoading && !error && (
        <MoviesCardList
          movies={_movies}
          onMore={isMore ? handleOnMore : undefined}
          onLike={handleOnLike}
        />
      )}
    </main>
  );
}
