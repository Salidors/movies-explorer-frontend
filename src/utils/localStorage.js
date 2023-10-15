const movieName = 'movies';

export const saveServerMovies = (movies) => {
  window.localStorage.setItem(movieName, JSON.stringify(movies));
};

export const getServerMovies = () => {
  const movies = window.localStorage.getItem(movieName);
  try {
    return JSON.parse(movies);
  } catch {
    return undefined;
  }
};

const allMoviesSearchName = 'movies-filter';

export const saveAllMoviesSearch = (value) => {
  window.localStorage.setItem(allMoviesSearchName, JSON.stringify(value));
};

export const getAllMoviesSearch = () => {
  const value = window.localStorage.getItem(allMoviesSearchName);
  return value ? JSON.parse(value) : {};
};

const foundMoviesName = 'movies-found';

export const saveFoundMovies = (value) => {
  window.localStorage.setItem(foundMoviesName, JSON.stringify(value));
};

export const getFoundMovies = () => {
  const movies = window.localStorage.getItem(foundMoviesName) || '[]';
  if (movies) return JSON.parse(movies);
};
