import './BurgerNavigation.css';

import React from 'react';
import { NavLink } from 'react-router-dom';
import ButtonProfile from '../elements/ButtonProfile/ButtonProfile';
import Navigation from '../Navigation/Navigation';


function BurgerNavigation({ isActive }) {

  const menu = React.useRef();

  React.useEffect(() => {
    if (isActive) {
      menu.current.classList.add("active");
    } else {
      menu.current.classList.remove("active");
    }
    
  }, [isActive]);

  return (
    <div className='burger-navigation' ref={menu}>
        <div className='burger-navigation__panel'>
          <div className='burger-navigation__box'>
            <Navigation>
              <NavLink
                to="/"
                className="navigation__link link-hover">Главная</NavLink>
            </Navigation>
            <ButtonProfile className="burger-navigation__profile" />
          </div>        
        </div>
    </div>
  );
}

export default BurgerNavigation;