import React from 'react';
import './Portfolio.css';
import openArrow from '../../../images/open-arrow.svg';

export default function Portfolio() {
  return (
    <section className='portfolio'>
      <h4 className='portfolio__title'>Портфолио</h4>
      <div className='portfolio__list'>
        <div className='portfolio__list-item'>
          <span className='item__text'>Статичный сайт</span>
          <img src={openArrow} alt='open' />
        </div>
        <div className='line-light' />
        <div className='portfolio__list-item'>
          <span className='item__text'>Адаптивный сайт</span>
          <img src={openArrow} alt='open' />
        </div>
        <div className='line-light' />
        <div className='portfolio__list-item'>
          <span className='item__text'>Одностраничное приложение</span>
          <img src={openArrow} alt='open' />
        </div>
      </div>
    </section>
  );
}
