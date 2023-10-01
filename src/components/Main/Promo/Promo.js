import React from 'react';
import './Promo.css';
import landingLogo from '../../../images/landing-logo.svg';

export default function Promo() {
  return (
    <section className='promo'>
      <div className='promo__container'>
        <h1 className='promo__container-title'>
          Учебный проект студента факультета Веб&#8209;разработки.
        </h1>
        <p className='promo__container-text'>
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </p>
        <a className='link promo__container-link' href='#about-project'>
          Узнать больше
        </a>
      </div>
      <img className='promo__globus' src={landingLogo} alt='глобус' />
    </section>
  );
}
