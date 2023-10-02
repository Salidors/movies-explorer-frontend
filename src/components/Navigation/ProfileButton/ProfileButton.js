import React from 'react';
import './ProfileButton.css';
import person from '../../../images/person.svg';
import { Link } from 'react-router-dom';

export default function ProfileButton({ isLight }) {
  return (
    <Link
      className={`link profile__link ${
        isLight ? 'profile__link-theme-light' : ''
      }`}
      to='/profile'
    >
      <p className='profile__link-text'>Аккаунт</p>
      <img src={person} alt='персонаж' />
    </Link>
  );
}
