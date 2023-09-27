import React from 'react';
import './Header.css';
import logo from '../../images/logo.svg';
import Menu from './Menu/Menu';
import { NavLink } from 'react-router-dom';

const AuthNavigation = () => {
  return (
    <nav className='header__nav'>
      <ul className='header__nav-list'>
        <li className='header__nav-list-item'>
          <NavLink
            to='/movies'
            className={({ isActive }) =>
              isActive
                ? 'link header__nav-list-link header__nav-list-link_active'
                : 'link header__nav-list-link'
            }
          >
            Фильмы
          </NavLink>
        </li>
        <li className='header__nav-list-item'>
          <NavLink
            to='/saved-movies'
            className={({ isActive }) =>
              isActive
                ? 'link header__nav-list-link header__nav-list-link_active'
                : 'link header__nav-list-link'
            }
          >
            Сохранённые фильмы
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default function Header({ isAuth, isLight }) {
  return (
    <header className={`header ${isLight ? 'header__theme-light' : ''}`}>
      <img src={logo} alt='logo' />
      {isAuth && <AuthNavigation />}
      <Menu isAuth={isAuth} isLight={isLight} />
    </header>
  );
}
