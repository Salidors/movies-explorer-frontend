import React from 'react';
import './ProfileButton.css';
import person from '../../../images/person.svg';

export default function ProfileButton({ isLight, onClick }) {
  return (
    <button
      className={`btn profile__btn ${isLight ? 'profile__btn-theme-light' : ''}`}
      onClick={onClick}
    >
      <span className='profile__btn-text'>Аккаунт</span>
      <img src={person} alt='person' />
    </button>
  );
}
