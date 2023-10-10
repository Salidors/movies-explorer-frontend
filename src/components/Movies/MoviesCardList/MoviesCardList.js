import React, { useEffect, useRef, useState } from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";

export default function MoviesCardList({
  movies = [],
  favorites = false,
  onLike,
  moviesPerPage,
}) {
  const { pathname } = useLocation();
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

  useEffect(() => {
    endPosition.current = moviesPerPage - 1;
  }, [moviesPerPage]);

  const showMore = movies.length > 0 && pathname !== "/saved-movies";
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
      <button
        className={`btn movies-page__more ${
          showMore ? "" : "movies-page__more--hidden"
        }`}
        onClick={handleOnMore}
        type='button'
      >
        Ещё
      </button>
    </section>
  );
}
