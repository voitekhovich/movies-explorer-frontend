import './NavTab.css';

import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import Button from '../Button/Button';

function NavTab({ className }) {
  return (
    <ul className={cn('nav-tab', className)}>
      <li><Link to='/signup' className='link' >Регистрация</Link></li>
      <li><Link to='/signin'><Button title='Войти' /></Link></li>
    </ul>
  );
}

export default NavTab;