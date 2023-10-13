import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

export default function MoviesCardList({
  movies = [],
  favorites = false,
  onLike,
  onMore,
}) {
  const showMore = Boolean(onMore);

  return (
    <section className='movies'>
      <ul className='movies__list'>
        {movies.map((movie) => (
          <MoviesCard
            movie={movie}
            key={movie.id}
            favorites={favorites}
            onLike={onLike}
          />
        ))}
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
