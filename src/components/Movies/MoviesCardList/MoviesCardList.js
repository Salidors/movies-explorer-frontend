import React, { useRef, useState } from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

export default function MoviesCardList({
  movies = [],
  favorites = false,
  onLike,
  moviesPerPage,
}) {
  const startPosition = useRef(0);
  const endPosition = useRef(moviesPerPage - 1);
  const [currentMovies, setCurrentMovies] = useState(
    movies.slice(startPosition.current, endPosition.current + 1)
  );

  const handleOnMore = () => {
    startPosition.current += moviesPerPage;
    endPosition.current += moviesPerPage;
    setCurrentMovies(
      movies.slice(startPosition.current, endPosition.current + 1)
    );
  };

  return (
    <section className='movies'>
      <ul className='movies__list'>
        {currentMovies.map((movie) => (
          <MoviesCard
            movie={movie}
            key={movie._id}
            favorites={favorites}
            onLike={onLike}
          />
        ))}
      </ul>
      {movies.length > 0 && (
        <button
          className='btn movies-page__more'
          onClick={handleOnMore}
          type='button'
        >
          Ещё
        </button>
      )}
    </section>
  );
}
