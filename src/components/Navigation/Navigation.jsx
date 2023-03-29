import "./Navigation.css";

import React from "react";
import { NavLink } from "react-router-dom";
import {
  LINK_MOVIES_TITLE,
  LINK_SAVED_MOVIES_TITLE,
} from "../../utils/constants";

function Navigation({ children }) {
  return (
    <nav className="navigation">
      {children}
      <NavLink
        to="/movies"
        className="navigation__link link-hover"
        activeClassName="navigation__link_active"
      >
        {LINK_MOVIES_TITLE}
      </NavLink>
      <NavLink
        to="/saved-movies"
        className="navigation__link link-hover"
        activeClassName="navigation__link_active"
      >
        {LINK_SAVED_MOVIES_TITLE}
      </NavLink>
    </nav>
  );
}

export default Navigation;
