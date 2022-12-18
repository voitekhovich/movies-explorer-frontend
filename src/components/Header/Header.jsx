import './Header.css';

import React from 'react';
import cn from 'classnames';

import Logo from '../elements/Logo/Logo';
import Navigation from '../Navigation/Navigation';
import ButtonProfile from '../elements/ButtonProfile/ButtonProfile';
import BurgerButton from '../BurgerButton/BurgerButton';

function Header({ className, children }) {

  
  return (
    <header className={cn('header', className)}>
      <Logo className='header__logo'/>
      { children ? children : (
        <React.Fragment>
          <div className='header__nav-container'>
            <Navigation />
            <ButtonProfile />
          </div>
          <BurgerButton />
        </React.Fragment>
      )}
    </header>
  );
}

export default Header;