import React from 'react';
import './Header.css';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';
import { Link, NavLink } from 'react-router-dom';
import { useWindowSize } from '../hooks/useWindowSize';

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

export default function Header({ isAuth, isLight, onAccountClick }) {
  const { windowSize } = useWindowSize();
  return (
    <header className={`header ${isLight ? 'header__theme-light' : ''}`}>
      <Link to='/' className='header__logo-link'>
        <img src={logo} alt='логотип' />
      </Link>
      {isAuth && windowSize > 1280 && <AuthNavigation />}
      <Navigation
        isAuth={isAuth}
        isLight={isLight}
        onAccountClick={onAccountClick}
      />
    </header>
  );
}
