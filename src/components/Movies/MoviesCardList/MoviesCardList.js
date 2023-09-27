import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

export default function MoviesCardList({
  movies = [],
  favorites = false,
  onLike,
}) {
  return (
    <section className='movies'>
      <ul className='movies__list'>
        {movies.map((movie) => (
          <MoviesCard
            movie={movie}
            key={movie._id}
            favorites={favorites}
            onLike={onLike}

          />
        ))}
      </ul>
    </section>
  );
}
