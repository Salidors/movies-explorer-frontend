import React from 'react';
import './Techs.css';

export default function Techs() {
  return (
    <section className='techs'>
      <h3 className='techs__title techs__title-line'>Технологии</h3>
      <h3 className='techs__description-title'>7 технологий</h3>
      <p className='techs__description-text'>
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <ul className='techs__list'>
        <li className='techs__list-item techs__list-item-text'>HTML</li>
        <li className='techs__list-item techs__list-item-text'>CSS</li>
        <li className='techs__list-item techs__list-item-text'>JS</li>
        <li className='techs__list-item techs__list-item-text'>React</li>
        <li className='techs__list-item techs__list-item-text'>Git</li>
        <li className='techs__list-item techs__list-item-text'>Express.js</li>
        <li className='techs__list-item techs__list-item-text'>mongoDB</li>
      </ul>
    </section>
  );
}
