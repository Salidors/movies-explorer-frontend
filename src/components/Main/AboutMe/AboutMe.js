import React from 'react';
import './AboutMe.css';
import userImage from '../../../images/userImage.png';

export default function AboutMe() {
  return (
    <section className='me'>
      <h3 className='me__title me__title-line'>Студент</h3>
      <div className='me__private-container'>
        <div className='me__private-description-container'>
          <h3 className='me__private-name'>Нина</h3>
          <p className='me__private-bio'>Фронтенд-разработчик, 38 лет</p>
          <p className='me__private-about'>
Мой жизненный путь начался в далеком Казахстане, родилась и окончила школу в маленьком но уютном провинциальном городке Сарани.
Затем переехала и поступила в университет в городе Караганда. Отучившись на "Информационные системы в экономике" вышла замуж и родила 3х детей.
За время проведенное в декретах и между ними успела много где поработать и много что попробовать. В не столь далеком 2018 году мы с семьей переехали в Санкт-Петербург.
В 2020 году появилась на свет младшая (4я) дочь. А вместе с ней и множество возможностей. Занялась саморазвитием и повышением профессиональных навыков.
Всегда было интересно делать что-то руками и сразу видеть результат. Так я дошла до HTML и CSS, а позже до фронтенд разработки.
          </p>
          <a href='https://github.com/Salidors' className='link me__private-github'>
            Github
          </a>
        </div>
        <img src={userImage} alt='user' className='me__private-image'/>
      </div>
    </section>
  );
}
