import React from 'react';
import './AboutProject.css';

export default function AboutProject() {
  return (
    <section className='about'>
      <div>
        <h3 className='project-title'>О проекте</h3>
        <div className='line' />
      </div>
      <div className='about__list'>
        <div className='about__list_item'>
          <h4 className='about_title'>Дипломный проект включал 5 этапов</h4>
          <p className='about_text'>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className='about__list_item'>
          <h4 className='about_title'>На выполнение диплома ушло 5 недель</h4>
          <p className='about_text'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className='about__progress'>
        <div className='about__progress_item about__progress_item1'>
          <div className='about__progress_item-green'>
            <p className='about__progress_title'>1 неделя</p>
          </div>
          <p className='about__progress_text'>Back-end</p>
        </div>

        <div className='about__progress_item about__progress_item2'>
          <div className='about__progress_item-gray'>
            <p className='about__progress_title'>4 неделя</p>
          </div>
          <p className='about__progress_text'>Front-end</p>
        </div>
      </div>
    </section>
  );
}
