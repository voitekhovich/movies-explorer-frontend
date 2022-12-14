import './Main.css';

import React from 'react';

import Header from '../../Header/Header';
import Promo from '../../Promo/Promo';
import AboutProject from '../../AboutProject/AboutProject';
import Techs from '../../Techs/Techs';
import AboutMe from '../../AboutMe/AboutMe';
import { Link } from 'react-router-dom';
import Footer from '../../Footer/Footer';

function Main() {
  return (
    <div className='main'>
      <Header className={'main__header'}>
        <ul className={'main__nav-tab'}>
          <li><Link to='/signup' className='main__link link-hover'>Регистрация</Link></li>
          <li><Link to='/signin' className='main__link main__link-button button-hover'>Войти</Link></li>
        </ul>
      </Header>
      <main>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
      </main>
      <Footer />
    </div>
    
  );
}

export default Main;