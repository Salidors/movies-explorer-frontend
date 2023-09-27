import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';
import ProfileButton from '../ProfileButton/ProfileButton';

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

const AuthMenu = ({ isLight }) => {
  return <ProfileButton isLight={isLight} />;
};

export default function Menu({ isAuth, isLight }) {
  return (
    <div>
      {isAuth ? (
        <AuthMenu isLight={isLight} />
      ) : (
        <AnonymousMenu isLight={isLight} />
      )}
    </div>
  );
}
