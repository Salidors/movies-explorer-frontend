import { API_URL } from '../components/constants/constants';

const headers = {
  'content-type': 'application/json',
  'Access-Control-Allow-Origin': '*',
};

export const signUp = (data) => {
  return fetch(`${API_URL}/signup`, {
    method: 'POST',
    credentials: 'include',
    headers,
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.message) throw Error(data.message);
      return data;
    });
};

export const signIn = (data) => {
  return fetch(`${API_URL}/signin`, {
    method: 'POST',
    credentials: 'include',
    headers,
    body: JSON.stringify(data),
  }).then((res) => res.json());
};

export const getUserInfo = () => {
  return fetch(`${API_URL}/users/me`, {
    credentials: 'include',
    headers,
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.message) throw Error(data.message);
      return data;
    });
};

export const updateUserInfo = (data) => {
  return fetch(`${API_URL}/users/me`, {
    method: 'PATCH',
    credentials: 'include',
    headers,
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.message) throw Error(data.message);
      return data;
    });
};

export const fetchFavoriteMovies = () => {
  return fetch(`${API_URL}/movies`, {
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  })
    .then((res) => res.json())
    .then(({ data }) => data);
};

export const saveMovie = (data) => {
  return fetch(`${API_URL}/movies`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then(({ data }) => {
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

export const signOut = (movieId) => {
  return fetch(`${API_URL}/signout`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  }).then((res) => res.json());
};

const filterMoviesByName = (movies = [], filter) =>
  movies.filter(
    ({ nameRU, nameEN }) =>
      nameRU.toLowerCase().includes(filter.toLowerCase()) ||
      nameEN.toLowerCase().includes(filter.toLowerCase())
  );

const filterMoviesByDuration = (movies = []) =>
  movies.filter(({ duration }) => duration < 30);

export const filterMovies = ({ movies, search, switcher }) => {
  const _movies = search ? filterMoviesByName(movies, search) : movies || [];
  return switcher ? filterMoviesByDuration(_movies) : _movies;
};
