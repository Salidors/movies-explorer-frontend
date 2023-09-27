import React from 'react';
import './AboutMe.css';
import userImage from '../../../images/userImage.png';

export default function AboutMe() {
  return (
    <section className='me'>
      <div>
        <h3 className='project-title'>Студент</h3>
        <div className='line' />
      </div>
      <div className='me__private'>
        <div className='me__description'>
          <h3 className='me__title'>Виталий</h3>
          <p className='me__subtitle'>Фронтенд-разработчик, 30 лет</p>
          <p className='me-about'>
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a href='https://github.com/Salidors' className='me__link'>
            Github
          </a>
        </div>
        <img src={userImage} alt='user' />
      </div>
      <div className='techs__list'></div>
    </section>
  );
}
