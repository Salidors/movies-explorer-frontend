import React, { useRef, useState } from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';
import { useCurrentUser } from '../hooks/useCurrentUser';

export default function Profile() {
  const refForm = useRef(null);

  const {
    currentUser: { name: currentName, email: currentEmail },
    updateCurrentUser,
  } = useCurrentUser();
  const [name, setName] = useState(currentName);
  const [nameError, setNameError] = useState('');

  const [email, setEmail] = useState(currentEmail);
  const [emailError, setEmailError] = useState('');

  const handleOnNameChange = (event) => {
    if (refForm.current.checkValidity()) setNameError('');
    else setNameError(event.target.validationMessage);
    setName(event.currentTarget.value);
  };

  const handleOnEmailChange = (event) => {
    if (refForm.current.checkValidity()) setEmailError('');
    else setEmailError(event.target.validationMessage);
    setEmail(event.currentTarget.value);
  };

  const isSubmitDisabled = Boolean(nameError || emailError);
  console.log({ nameError, emailError, isSubmitDisabled });
  return (
    <section className='profile'>
      <form
        className='profile__form'
        ref={refForm}
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <div className='profile__form-container'>
          <h1 className='profile__form-title'>Привет, {currentName}!</h1>
          <div className='profile__form-input profile__form-input-email'>
            <label
              className='profile__input-label'
              htmlFor='profile__input-name'
            >
              Имя
            </label>
            <input
              id='profile__input-name'
              type='text'
              className='profile__input'
              required
              minLength={2}
              maxLength={30}
              placeholder={currentName}
              pattern='^(?!\s)[A-Za-zА-Яа-я\-\s]+$'
              onChange={handleOnNameChange}
              value={name}
            />
          </div>
          <p className='profile__error'>{nameError}</p>
          <div className='profile__form-input profile__form-input-email'>
            <label className='profile__input-label'>E-mail</label>
            <input
              type='email'
              className='profile__input'
              id='profile__input-email'
              placeholder={email}
              pattern='^.+@.+\..+$'
              onChange={handleOnEmailChange}
              value={email}
              required
            />
          </div>
          <p className='profile__error'>{emailError}</p>
        </div>
        <nav className='profile__form-nav'>
          <button
            className={'btn profile__btn-save'}
            onClick={() => updateCurrentUser({ name, email })}
            type='button'
            disabled={isSubmitDisabled}
          >
            Редактировать
          </button>
          <Link to='/signout' className='link profile__form-link'>
            Выйти из аккаунта
          </Link>
        </nav>
      </form>
    </section>
  );
}
