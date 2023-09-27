import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';
import ProfileButton from './ProfileButton/ProfileButton';

const AnonymousMenu = () => {
  return (
    <div className='header__anonymous-links'>
      <Link to='/signup' className='link header__anonymous-links-signup'>
        Регистрация
      </Link>
      <Link to='/signin' className='link header__anonymous-signin'>
        Войти
      </Link>
    </div>
  );
};

const AuthMenu = ({ isLight, onAccountClick }) => {
  return <ProfileButton isLight={isLight} onClick={onAccountClick} />;
};

export default function Navigation({ isAuth, isLight, onAccountClick }) {
  return (
    <div>
      {isAuth ? (
        <AuthMenu isLight={isLight} onAccountClick={onAccountClick} />
      ) : (
        <AnonymousMenu isLight={isLight} />
      )}
    </div>
  );
}
