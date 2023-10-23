import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useFavoriteMovies } from '../../../hooks/useFavoriteMovies';

export default function MoviesCardList({
  movies = [],
  favorites = false,
  onLike,
  onMore,
}) {
  const showMore = Boolean(onMore);
  const { favoriteMovies } = useFavoriteMovies();

  return (
    <section className='movies'>
      <ul className='movies__list'>
        {movies.map((movie) => {
          const isLiked = favoriteMovies.some((m) => m.movieId === movie.id);

          return (
            <MoviesCard
              movie={movie}
              key={movie.id}
              favorites={favorites}
              onLike={() => onLike(movie, isLiked)}
              isLiked={isLiked}
            />
          );
        })}
      </ul>
      <button
        className={`btn movies-page__more ${
          showMore ? '' : 'movies-page__more--hidden'
        }`}
        onClick={onMore}
        type='button'
      >
        Ещё
      </button>
    </section>
  );
}
