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

const AuthMenu = () => {
  return <ProfileButton />;
};

export default function Menu({ isAuth }) {
  return <div>{isAuth ? <AuthMenu /> : <AnonymousMenu />}</div>;
}
