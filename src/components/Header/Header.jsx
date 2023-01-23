import "./Header.css";

import React, { useState } from "react";
import cn from "classnames";

import Logo from "../elements/Logo/Logo";
import Navigation from "../Navigation/Navigation";
import ButtonProfile from "../elements/ButtonProfile/ButtonProfile";
import BurgerButton from "../BurgerButton/BurgerButton";
import BurgerNavigation from "../BurgerNavigation/BurgerNavigation";
import { Link } from "react-router-dom";
import { LINK_SIGNIN_TITLE, LINK_SIGNUP_TITLE } from "../../utils/constants";

function Header({ className, isLoggedIn = true }) {
  const [isBurgerEnable, setIsBurgerEnable] = useState(false);

  const handleBurgerClick = () => {
    setIsBurgerEnable(!isBurgerEnable);
  };

  return (
    <header className={cn("header", className)}>
      <Logo className="header__logo" />
      {!isLoggedIn ? (
        <React.Fragment>
          <ul className={"main__nav-tab"}>
            <li>
              <Link to="/signup" className="main__link link-hover">
                {LINK_SIGNUP_TITLE}
              </Link>
            </li>
            <li>
              <Link
                to="/signin"
                className="main__link main__link-button button-hover"
              >
                {LINK_SIGNIN_TITLE}
              </Link>
            </li>
          </ul>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div className="header__nav-container">
            <Navigation />
            <ButtonProfile />
          </div>
          <BurgerButton onClick={handleBurgerClick} />
          <BurgerNavigation isActive={isBurgerEnable} setIsBurgerEnable={setIsBurgerEnable} />
        </React.Fragment>
      )}
    </header>
  );
}

export default Header;
