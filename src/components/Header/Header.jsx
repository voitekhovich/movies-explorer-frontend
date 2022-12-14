import './Header.css';

import React from 'react';
import cn from 'classnames';

import Logo from '../Logo/Logo';
import NavTab from '../NavTab/NavTab';
import { Link } from 'react-router-dom';

function Header({ className }) {
  return (
    <div className={cn('header', className)}>
      <Link to='/'>
        <Logo className='header__logo'/>
      </Link>
      <NavTab className='header__nav-tab' />
    </div>
  );
}

export default Header;