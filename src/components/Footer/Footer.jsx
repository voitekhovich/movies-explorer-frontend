import './Footer.css';

import React from 'react';

function Footer() {
  return (
    <div className='footer'>
      <p className='footer__text'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className='footer__block'>
        <p className='footer__copyright'>&copy; 2022</p>
        <ul className='footer__links'>
          <li>
            <a className='footer__url'href='https://practicum.yandex.ru/' target="_blank" rel="noreferrer">
              Яндекс.Практикум
            </a>
          </li>
          <li>
            <a className='footer__url' href='https://github.com/' target="_blank" rel="noreferrer">
              Github
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;