import React from 'react';
import './Techs.css';

export default function Techs() {
  return (
    <section className='techs'>
      <div>
        <h3 className='project-title'>Технологии</h3>
        <div className='line' />
      </div>
      <div className='techs__description'>
        <h3 className='techs-title'>7 технологий</h3>
        <p className='about_text text__center'>
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <div className='techs__list'>
          <div className='techs__list_item'>
            <span className='techs__list_item_text'>HTML</span>
          </div>
          <div className='techs__list_item'>
            <span className='techs__list_item_text'>CSS</span>
          </div>
          <div className='techs__list_item'>
            <span className='techs__list_item_text'>JS</span>
          </div>
          <div className='techs__list_item'>
            <span className='techs__list_item_text'>React</span>
          </div>
          <div className='techs__list_item'>
            <span className='techs__list_item_text'>Git</span>
          </div>
          <div className='techs__list_item'>
            <span className='techs__list_item_text'>Express.js</span>
          </div>
          <div className='techs__list_item'>
            <span className='techs__list_item_text'>mongoDB</span>
          </div>
        </div>
      </div>
    </section>
  );
}
