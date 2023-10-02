import React from 'react';
import './AboutMe.css';
import userImage from '../../../images/userImage.png';

export default function AboutMe() {
  return (
    <section className='me'>
      <h2 className='me__title me__title-line'>Студент</h2>
      <div className='me__private-container'>
        <div className='me__private-description-container'>
          <h3 className='me__private-name'>Нина</h3>
          <p className='me__private-bio'>Фронтенд-разработчик, 38 лет</p>
          <p className='me__private-about'>
            Родилась и училась в Казахстане. Закончила "ИС в экономике". В '18 году переехали в Санкт-Петербург и появилась
          (4я) дочь. Стала интересоваться HTML и CSS. Так дошла
            до фронтенд разработки. 
          </p>
          <a
            href='https://github.com/Salidors'
            className='link me__private-github'
            target='_blank'
            rel='noreferrer'
          >
            Github
          </a>
        </div>
        <img
          src={userImage}
          alt='фото-студента'
          className='me__private-image'
        />
      </div>
    </section>
  );
}
