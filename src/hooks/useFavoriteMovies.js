import { useContext } from 'react';
import { Context } from '../Context/Context';

export const useFavoriteMovies = () => {
  const { favoriteMovies = [], setFavoriteMovies } = useContext(Context);

  return { favoriteMovies, setFavoriteMovies };
};
