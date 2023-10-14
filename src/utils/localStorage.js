const movieName = 'movies';

export const saveServerMovies = (movies) => {
  window.localStorage.setItem(movieName, JSON.stringify(movies));
};

export const getServerMovies = () => {
  const movies = window.localStorage.getItem(movieName);
  if (movies) return JSON.parse(movies);
};

const allMoviesSearchName = 'movies-all-search';

export const saveAllMoviesSearch = (value) => {
  window.localStorage.setItem(allMoviesSearchName, JSON.stringify(value));
};

export const getAllMoviesSearch = () => {
  const value = window.localStorage.getItem(allMoviesSearchName);
  return value ? JSON.parse(value) : { switcher: true, filter: '' };
};

const savedMoviesSearchName = 'movies-saved-search';

export const saveSavedMoviesSearch = (value) => {
  window.localStorage.setItem(savedMoviesSearchName, JSON.stringify(value));
};

export const getSavedMoviesSearch = () => {
  const value = window.localStorage.getItem(savedMoviesSearchName);
  return value ? JSON.parse(value) : { switcher: true, filter: '' };
};
