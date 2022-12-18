import './Navigation.css';

import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation({ children }) {
  return (
    <nav className='navigation'>
      { children }
      <NavLink
        to="/movies"
        className="navigation__link link-hover"
        activeClassName="navigation__link_active">Фильмы</NavLink>
      <NavLink
        to="/saved-movies"
        className="navigation__link link-hover"
        activeClassName="navigation__link_active">Сохранённые фильмы</NavLink>
    </nav>
  );
}

export default Navigation;