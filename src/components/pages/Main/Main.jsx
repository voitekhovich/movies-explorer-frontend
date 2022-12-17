import './Main.css';

import React from 'react';

import Header from '../../Header/Header';
import Promo from '../../Promo/Promo';
import AboutProject from '../../AboutProject/AboutProject';
import Techs from '../../Techs/Techs';
import AboutMe from '../../AboutMe/AboutMe';
import { Link } from 'react-router-dom';
import Button from '../../Button/Button';
import Footer from '../../Footer/Footer';

function Main() {
  return (
    <React.Fragment>
      <Header className={'main__header'}>
        <ul className={'main__nav-tab'}>
          <li><Link to='/signup' className='link'>Регистрация</Link></li>
          <li><Link to='/signin'><Button title='Войти' /></Link></li>
        </ul>
      </Header>
      <main>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
      </main>
      <Footer />
    </React.Fragment>
    
  );
}

export default Main;