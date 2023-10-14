import { useEffect, useState } from 'react';
import { getServerMovies, saveServerMovies } from './localStorage';

const filterMovies = (movies, filter) =>
  movies.filter(
    ({ nameRU, nameEN }) =>
      nameRU.toLowerCase().includes(filter.toLowerCase()) ||
      nameEN.toLowerCase().includes(filter.toLowerCase())
  );

const initMovies = getServerMovies();

export const useMovies = (filter) => {
  const [serverMovies, setServerMovies] = useState(initMovies);
  const [movies, setMovies] = useState();
  const [error, setError] = useState();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (!filter || initMovies !== undefined) return;

    setLoading(true);
    fetch('https://api.nomoreparties.co/beatfilm-movies', {
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((data) => {
        saveServerMovies(data);
        setServerMovies(data);
      })
      .catch(() => {
        setError(
          'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.'
        );
      })
      .finally(() => setLoading(false));
  }, [filter]);

  useEffect(() => {
    if (!serverMovies || !filter) return;
    setMovies(filterMovies(serverMovies, filter));
  }, [filter, serverMovies]);

  return { isLoading, movies, error };
};
