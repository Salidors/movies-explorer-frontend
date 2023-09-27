import React from 'react';
import './Signin.css';
import { Link } from 'react-router-dom';

export default function Signin() {
  return (
    <main className='signin'>
      <form className='signin__form'>
        <h2 className='signin__form-title'>Рады видеть!</h2>
        <div className='signin__form-input signin__form-input-email'>
          <label className='signin__input-label'>E-mail</label>
          <input type='text' className='signin__input' />
        </div>
        <div className='signin__form-input'>
          <label className='signin__input-label'>Пароль</label>
          <input type='password' className='signin__input' />
        </div>
        <button className='btn signin__form-button'>Войти</button>
        <nav className='signin__form-nav'>
          <span className='signin__form-text'>Ещё не зарегистрированы?</span>
          <Link to='/signup' className='link signin__form-link'>
            Регистрация
          </Link>
        </nav>
      </form>
    </main>
  );
}
