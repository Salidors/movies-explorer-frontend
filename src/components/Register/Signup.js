import React from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';

export default function Signup() {
  return (
    <main className='signup'>
      <form className='signup__form'>
        <h2 className='signup__form-title'>Добро пожаловать!</h2>
        <div className='signup__form-input signup__form-input-email'>
          <label className='signup__input-label'>Имя</label>
          <input type='text' className='signup__input' />
        </div>
        <div className='signup__form-input signup__form-input-email'>
          <label className='signup__input-label'>E-mail</label>
          <input type='text' className='signup__input' />
        </div>
        <div className='signup__form-input'>
          <label className='signup__input-label'>Пароль</label>
          <input type='password' className='signup__input' />
        </div>
        <button className='btn signup__form-button'>Зарегистрироваться</button>
        <nav className='signup__form-nav'>
          <span className='signup__form-text'>Уже зарегистрированы?</span>
          <Link to='/signin' className='link signup__form-link'>
            Войти
          </Link>
        </nav>
      </form>
    </main>
  );
}
