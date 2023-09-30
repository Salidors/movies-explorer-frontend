import React from 'react';
import './LoginHeader.css';
import logo from '../../../images/logo.svg';
import { Link } from 'react-router-dom';

export default function LoginHeader() {
  return (
    <header className='header-login'>
      <Link to='/' className='header__logo-link'>
        <img src={logo} alt='логотип' className='header-login__logo' />
      </Link>
    </header>
  );
}
