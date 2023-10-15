import { API_URL, MOVIES_API_URL } from '../components/constants/constants';

const filterMoviesByName = (movies = [], filter) =>
  movies.filter(
    ({ nameRU, nameEN }) =>
      nameRU.toLowerCase().includes(filter.toLowerCase()) ||
      nameEN.toLowerCase().includes(filter.toLowerCase())
  );

const filterMoviesByDuration = (movies = []) =>
  movies.filter(({ duration }) => duration < 30);

export const fetchMovies = () => {
  return fetch(`${MOVIES_API_URL}/beatfilm-movies`, {
    headers: { 'Content-Type': 'application/json' },
  })
    .then((res) => res.json())
    .then((data) => data);
};

export const fetchFavoriteMovies = () => {
  return fetch(`${API_URL}/movies`, {
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  })
    .then((res) => res.json())
    .then(({ data }) => data);
};

export const filterMovies = ({ movies, search, switcher }) => {
  const _movies = search ? filterMoviesByName(movies, search) : movies || [];
  return switcher ? filterMoviesByDuration(_movies) : _movies;
};

export const saveMovie = (data) => {
  return fetch(`${API_URL}/movies`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.message) throw Error(data.message);
      return data;
    });
};

export const deleteMovie = (movieId) => {
  return fetch(`${API_URL}/movies/${movieId}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  }).then((res) => res.json());
};
