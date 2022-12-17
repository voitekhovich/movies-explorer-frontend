import './Promo.css';

import React from 'react';
import { Link } from "react-router-dom";
import Button from '../Button/Button';

function Promo() {

  return (
    <div className='promo'>
      <div className='promo__image'></div>
      <div className='promo__content'>
        <h1 className='promo__title'>Учебный проект студента факультета Веб&#8209;разработки.</h1>
        <p className='promo__text'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        <Link to='movies'><Button className='promo__button' title='Узнать больше' /></Link>
      </div>
    </div>
  );
}

export default Promo;