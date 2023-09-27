import React from 'react';
import './MoviesCard.css';
import { formatDuration } from '../../../utils/date';

export default function MoviesCard({
  movie,
  isLiked = false,
  onLike,
  favorites,
}) {
  const { trailerLink, nameRU, image, duration } = movie;
  const formattedDuration = formatDuration(duration);

  return (
    <li className='movies__item'>
      <a
        className='link movies__trailer-link'
        href={trailerLink}
        target='_blank'
        rel='noreferrer'
      >
        <img className='movies__image' alt={nameRU} src={image} />
      </a>
      <div className='movies__description'>
        <div className='movies__description-container'>
          <h3 className='movies__title'>{nameRU}</h3>
          <button
            className={getButtonClassName(isLiked, favorites)}
            onClick={onLike}
            type='button'
          ></button>
        </div>
        <p className='movies__duration'>{formattedDuration}</p>
      </div>
    </li>
  );
}

const getButtonClassName = (isLiked, favorites) => {
  if (favorites) return 'btn movies__delete-btn';
  return isLiked
    ? 'btn movies__like-btn movies__like-btn_active'
    : 'btn movies__like-btn';
};
