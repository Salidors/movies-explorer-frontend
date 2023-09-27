import React from 'react';
import './ProfileButton.css';
import person from '../../../images/person.svg';

export default function ProfileButton() {
  return (
    <button className='profile__btn'>
      <span className='profile__btn-text'>Аккаунт</span>
      <img src={person} alt='person'/>
    </button>
  );
}
