import React, { useRef, useState } from 'react';
import './Signin.css';
import { Link } from 'react-router-dom';

export default function Signin({ onSignIn }) {
  const refForm = useRef(null);

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

  const isSubmitDisabled = Boolean(!isFormValid);

  return (
    <main className='signin'>
      <form
        className='signin__form'
        ref={refForm}
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <h1 className='signin__form-title'>Рады видеть!</h1>
        <div className='signin__form-input signin__form-input-email'>
          <label className='signin__input-label'>E-mail</label>
          <input
            type='email'
            className='signin__input'
            value={email}
            onChange={handleOnEmailChange}
            pattern='^.+@.+\..+$'
            required
          />
        </div>
        <div className='signin__form-input'>
          <label className='signin__input-label'>Пароль</label>
          <input
            type='password'
            className='signin__input'
            value={password}
            onChange={handleOnPasswordChange}
            required
            minLength={2}
            maxLength={30}
          />
        </div>
        <p className='profile__error'>{error}</p>
        <button
          className='btn signin__form-button'
          onClick={onSignIn}
          value={email}
          disabled={isSubmitDisabled}
          type='button'
        >
          Войти
        </button>
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
