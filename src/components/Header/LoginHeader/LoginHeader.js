import React from 'react';
import './LoginHeader.css';
import logo from '../../../images/logo.svg';

export default function LoginHeader() {
  return (
    <header className='header-login'>
      <img src={logo} alt='logo' />
    </header>
  );
}
