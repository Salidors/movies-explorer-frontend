import React from 'react';
import './AboutMe.css';
import userImage from '../../../images/userImage.png';

export default function AboutMe() {
  return (
    <section className='me'>
      <h3 className='me__title me__title-line'>Студент</h3>
      <div className='me__private-container'>
        <div className='me__private-description-container'>
          <h3 className='me__private-name'>Виталий</h3>
          <p className='me__private-bio'>Фронтенд-разработчик, 30 лет</p>
          <p className='me__private-about'>
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a href='https://github.com/Salidors' className='link me__private-github'>
            Github
          </a>
        </div>
        <img src={userImage} alt='user' />
      </div>
    </section>
  );
}
