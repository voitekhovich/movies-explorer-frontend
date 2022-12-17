import './Header.css';

import React from 'react';
import cn from 'classnames';

import Logo from '../elements/Logo/Logo';
import Navigation from '../Navigation/Navigation';
import ButtonProfile from '../elements/ButtonProfile/ButtonProfile';

function Header({ className, children }) {
  return (
    <header className={cn('header', className)}>
      <Logo className='header__logo'/>
      { children ? children : (
        <div className='header__nav-container'>
        <Navigation />
        <ButtonProfile />
      </div>
      )}
    </header>
  );
}

export default Header;