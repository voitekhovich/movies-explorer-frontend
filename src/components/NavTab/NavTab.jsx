import './NavTab.css';

import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import Button from '../Button/Button';

function NavTab({ className }) {
  return (
    <ul className={cn('nav-tab', className)}>
      <li><Link to='#' className='link' >Регистрация</Link></li>
      <li><Button title='Войти' /></li>
    </ul>
  );
}

export default NavTab;