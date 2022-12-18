import './BurgerButton.css';

import React from 'react';
import cn from 'classnames';

function BurgerButton({ className }) {

  const btmBurger = React.useRef();

  const handleBurgerClick = () => {
    btmBurger.current.classList.toggle("active");
    // menu.current.classList.toggle("active");
  };

  return (
    <div
      className={cn('burger-button', 'button-hover', className)}
      ref={btmBurger}
      onClick={handleBurgerClick}
    />
  );
}

export default BurgerButton;