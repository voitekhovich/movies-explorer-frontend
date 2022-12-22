import './Header.css';

import React, { useState } from 'react';
import cn from 'classnames';

import Logo from '../elements/Logo/Logo';
import Navigation from '../Navigation/Navigation';
import ButtonProfile from '../elements/ButtonProfile/ButtonProfile';
import BurgerButton from '../BurgerButton/BurgerButton';
import BurgerNavigation from '../BurgerNavigation/BurgerNavigation';

function Header({ className, children }) {

  const [isBurgerEnable, setIsBurgerEnable] = useState(false);

  const handleBurgerClick = () => {
    setIsBurgerEnable(!isBurgerEnable);
  };

  return (
    <header className={cn('header', className)}>
      <Logo className='header__logo'/>
      { children ? children : (
        <React.Fragment>
          <div className='header__nav-container'>
            <Navigation />
            <ButtonProfile />
          </div>
          <BurgerButton onClick={ handleBurgerClick }/>
          <BurgerNavigation isActive={ isBurgerEnable }/>
        </React.Fragment>
      )}
    </header>
  );
}

export default Header;