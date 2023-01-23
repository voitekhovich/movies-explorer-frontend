import "./BurgerButton.css";

import React from "react";
import cn from "classnames";

function BurgerButton(props) {
  const btmBurger = React.useRef();

  const handleBurgerClick = () => {
    btmBurger.current.classList.toggle("active");
    props.onClick();
  };

  return (
    <div
      className={cn("burger-button", "button-hover", props.className)}
      ref={btmBurger}
      onClick={handleBurgerClick}
    />
  );
}

export default BurgerButton;
