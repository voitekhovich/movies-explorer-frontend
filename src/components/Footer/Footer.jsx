import './Footer.css';

import React from 'react';

function Footer() {
  return (
    <div className='footer'>
      <p className='footer__text'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className='footer__block'>
        <p className='footer__copyright'>&copy; 2022</p>
        <ul className='footer__links'>
          <li>Яндекс.Практикум</li>
          <li>Github</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;