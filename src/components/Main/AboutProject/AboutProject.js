import React from "react";
import "./AboutProject.css";

export default function AboutProject() {
  return (
    <section className="about" id="about-project">
      <h2 className="about__title about__title-line">О проекте</h2>
      <ul className="about__list">
        <li className="about__list-item">
          <h3 className="about__list-title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about__list-text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>
        <li className="about__list-item">
          <h3 className="about__list-title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about__list-text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <div className="about__progress">
        <div className="about__progress-item about__progress-item1">
          <div className="about__progress-item-green">
            <p className="about__progress_title">1 неделя</p>
          </div>
          <p className="about__progress-item-text">Back-end</p>
        </div>

        <div className="about__progress-item about__progress-item2">
          <div className="about__progress-item-gray">
            <p className="about__progress_title">4 неделя</p>
          </div>
          <p className="about__progress-item-text">Front-end</p>
        </div>
      </div>
    </section>
  );
}
