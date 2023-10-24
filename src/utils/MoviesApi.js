import { MOVIES_API_URL } from '../constants/constants';

export const fetchMovies = () => {
  return fetch(`${MOVIES_API_URL}/beatfilm-movies`, {
    headers: { 'Content-Type': 'application/json' },
  })
    .then((res) => res.json())
    .then((data) => data);
};
