import './AboutMe.css';
import photo from '../../images/about_me.jpg';

import React from 'react';
import BlockTitle from '../BlockTitle/BlockTitle';

function AboutMe() {
  return (
    <div className='about-me'>
      <BlockTitle title='Студент' />
      <div className='about-me__block'>
        <img className='about-me__photo' src={photo} alt='Фото профиля'/>
        <h3 className='about-me__name'>Александр</h3>
        <p className='about-me__position'>Фронтенд-разработчик, 28 лет</p>
        <p className='about-me__description'>
          Я живу в Минске, закончил факультет компьютерных технологий.
          Я люблю слушать музыку. Недавно начал кодить.
          Прошёл курс по веб-разработке.
        </p>
        <a className='about-me__url' href='https://github.com'>Github</a>
      </div>
      <p className='about-me__portfolio'>Портфолио</p>
    </div>
  );
}

export default AboutMe;