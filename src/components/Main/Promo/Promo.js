import React from 'react';
import './Promo.css';
import landingLogo from '../../../images/landing-logo.svg';

export default function Promo() {
  return (
    <section className='promo'>
      <div className='promo__container'>
        <h2 className='title'>
          Учебный проект студента факультета
          <br />
          Веб-разработки.
        </h2>
        <p className='text'>
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </p>
        <button className='btn'>Узнать больше</button>
      </div>
      <img
        className='promo__container-img'
        src={landingLogo}
        alt='Веб земной шар'
      />
    </section>
  );
}
