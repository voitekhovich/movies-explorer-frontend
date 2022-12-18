import './AboutProject.css';

import React from 'react';
import BlockTitle from '../BlockTitle/BlockTitle';

function AboutProject() {
  return (
    <section className='about-project'>
      <BlockTitle title='О проекте' />
      <ul className='about-project__table'>
        <li className='table__sell'>
          <h3 className='table__title'>Дипломный проект включал 5 этапов</h3>
          <p className='table__text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </li>
        <li className='table__sell'>
          <h3 className='table__title'>На выполнение диплома ушло 5 недель</h3>
          <p className='table__text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </li>
      </ul>
      <div className='about-project__timeline'>
        <p className='timeline__text timeline__week'>1 неделя</p>
        <p className='timeline__text timeline__week'>4 недели</p>
        <p className='timeline__text timeline__description'>Back-end</p>
        <p className='timeline__text timeline__description'>Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;