import React from 'react';
import './Portfolio.css';
import openArrow from '../../../images/open-arrow.svg';

export default function Portfolio() {
  return (
    <section className='portfolio'>
      <h4 className='portfolio__title'>Портфолио</h4>
      <nav className='portfolio__nav'>
        <ul className='portfolio__nav-list'>
          <li className='portfolio__nav-list-item'>
            <a href='https://salidors.github.io/how-to-learn/' className='link portfolio__links-item'>
              <span className='item__text'>Статичный сайт</span>
              <img src={openArrow} alt='open' />
            </a>
          </li>
          <div className='line-light' />
          <li className='portfolio__nav-list-item'>
            <a href='https://salidors.github.io/russian-travel/' className='link portfolio__links-item'>
              <span className='item__text'>Адаптивный сайт</span>
              <img src={openArrow} alt='open' />
            </a>
          </li>
          <div className='line-light' />
          <li className='portfolio__nav-list-item'>
            <a href='https://salidors.github.io/mesto/' className='link portfolio__links-item'>
              <span className='item__text'>Одностраничное приложение</span>
              <img src={openArrow} alt='open' />
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}
