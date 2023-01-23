import "./AboutProject.css";

import React from "react";
import BlockTitle from "../BlockTitle/BlockTitle";

function AboutProject() {
  return (
    <section className="about-project">
      <BlockTitle title="О проекте" />
      <ul className="about-project__table">
        <li className="about-project__table-sell">
          <h3 className="about-project__table-title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__table-text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>
        <li className="about-project__table-sell">
          <h3 className="about-project__table-title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__table-text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <div className="about-project__timeline">
        <p className="about-project__timeline-text about-project__timeline-week">
          1 неделя
        </p>
        <p className="about-project__timeline-text about-project__timeline-week">
          4 недели
        </p>
        <p className="about-project__timeline-text about-project__timeline-description">
          Back-end
        </p>
        <p className="about-project__timeline-text about-project__timeline-description">
          Front-end
        </p>
      </div>
    </section>
  );
}

export default AboutProject;
