import './Header.css';

import React from 'react';
import cn from 'classnames';

import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';

function Header({ className, children }) {
  return (
    <div className={cn('header', className)}>
      <Link to='/'>
        <Logo className='header__logo'/>
      </Link>
      { children }
    </div>
  );
}

export default Header;