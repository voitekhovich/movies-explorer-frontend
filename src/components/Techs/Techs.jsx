import './Techs.css';

import React from 'react';
import BlockTitle from '../BlockTitle/BlockTitle';

function Techs() {

  const techsItems = ['HTML', 'CSS', 'JS', 'React', 'Git', 'Express.js', 'mongoDB'];

  return (
    <div className='techs'>
      <BlockTitle title='Технологии' />
      <h3 className='techs__title'>{techsItems.length} технологий</h3>
      <p className='techs__description'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      
      <ul className="techs__list">
        {techsItems.map((item) => (
          <li className='techs__list-item'>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Techs;