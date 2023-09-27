import React from 'react';
import './ProfileButton.css';
import person from '../../../images/person.svg';

export default function ProfileButton({isLight}) {
  return (
    <button className={`profile__btn ${isLight ? 'profile__btn-theme-light' : ''}`}>
      <span className='profile__btn-text'>Аккаунт</span>
      <img src={person} alt='person'/>
    </button>
  );
}
