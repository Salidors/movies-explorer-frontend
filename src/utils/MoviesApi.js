import { useEffect, useState } from 'react';

const filterMovies = (movies, filter) =>
  movies.filter(
    ({ nameRU, nameEN }) =>
      nameRU.toLowerCase().includes(filter.toLowerCase()) ||
      nameEN.toLowerCase().includes(filter.toLowerCase())
  );

export const useMovies = (filter) => {
  const [serverMovies, setServerMovies] = useState();
  const [movies, setMovies] = useState();
  const [error, setError] = useState();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (!filter || serverMovies !== undefined) return;

    setLoading(true);
    fetch('https://api.nomoreparties.co/beatfilm-movies', {
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then(setServerMovies)
      .catch(() => {
        setError(
          'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.'
        );
      })
      .finally(() => setLoading(false));
  }, [filter, serverMovies]);

  useEffect(() => {
    if (!serverMovies) return;
    setMovies(filterMovies(serverMovies, filter));
  }, [filter, serverMovies]);

  return { isLoading, movies, error };
};
