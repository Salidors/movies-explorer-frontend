import React, { useCallback, useRef, useState } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';
import { signUp } from '../../utils/MainApi';

export default function Signup({ onSuccessSignUp }) {
  const refForm = useRef(null);

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const [email, setEmail] = useState('');
  const [error, setError] = useState();

  const handleOnPasswordChange = (event) => {
    if (refForm.current.checkValidity()) setError('');
    else setError(event.target.validationMessage);
    setPassword(event.currentTarget.value);
  };
  const isFormValid = refForm.current && refForm.current.checkValidity();

  const handleOnEmailChange = (event) => {
    if (refForm.current.checkValidity()) setError('');
    else setError(event.target.validationMessage);
    setEmail(event.currentTarget.value);
  };

  const handleOnNameChange = (event) => {
    if (refForm.current.checkValidity()) setError('');
    else setError(event.target.validationMessage);
    setName(event.currentTarget.value);
  };

  const isSubmitDisabled = Boolean(!isFormValid);

  const handleOnSubmit = useCallback(() => {
    signUp({ name, email, password })
      .then(() => {
        onSuccessSignUp();
      })
      .catch((e) => {
        setError(e.message);
        console.error(e);
      });
  }, [name, email, password, onSuccessSignUp]);

  return (
    <main className='signup'>
      <form className='signup__form' ref={refForm}>
        <h1 className='signup__form-title'>Добро пожаловать!</h1>
        <div className='signup__form-input signup__form-input-email'>
          <label className='signup__input-label'>Имя</label>
          <input
            type='text'
            className='signup__input'
            required
            pattern='^(?!\s)[A-Za-zА-Яа-я\-\s]+$'
            minLength={2}
            maxLength={30}
            value={name}
            onChange={handleOnNameChange}
            placeholder='Введите имя'
          />
        </div>
        <div className='signup__form-input signup__form-input-email'>
          <label className='signup__input-label'>E-mail</label>
          <input
            type='email'
            className='signup__input'
            pattern='^.+@.+\..+$'
            required
            value={email}
            onChange={handleOnEmailChange}
            placeholder='Введите емейл'
            maxLength={40}
          />
        </div>
        <div className='signup__form-input'>
          <label className='signup__input-label'>Пароль</label>
          <input
            type='password'
            className='signup__input'
            required
            value={password}
            onChange={handleOnPasswordChange}
            placeholder='Введите пароль'
            minLength={1}
            maxLength={30}
          />
        </div>
        <p className='profile__error'>{error}</p>
        <button
          className='btn signup__form-button'
          type='button'
          disabled={isSubmitDisabled}
          onClick={handleOnSubmit}
        >
          Зарегистрироваться
        </button>
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
