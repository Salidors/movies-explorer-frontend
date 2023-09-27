import React from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';

export default function Profile() {
  return (
    <main className='profile'>
      <form className='profile__form'>
        <h2 className='profile__form-title'>Добро пожаловать!</h2>
        <div className='profile__form-input profile__form-input-email'>
          <label className='profile__input-label'>Имя</label>
          <input type='text' className='profile__input' />
        </div>
        <div className='profile__form-input profile__form-input-email'>
          <label className='profile__input-label'>E-mail</label>
          <input type='text' className='profile__input' />
        </div>
        <div className='profile__form-input'>
          <label className='profile__input-label'>Пароль</label>
          <input type='password' className='profile__input' />
        </div>
        <button className='profile__form-button'>Зарегистрироваться</button>
        <nav className='profile__form-nav'>
          <span className='profile__form-text'>Уже зарегистрированы?</span>
          <Link to='/profile' className='link profile__form-link'>
            Войти
          </Link>
        </nav>
      </form>
    </main>
  );
}
