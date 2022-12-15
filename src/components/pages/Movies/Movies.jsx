import './Movies.css';

import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import SearchForm from '../../SearchForm/SearchForm';
import MoviesCardList from '../../MoviesCardList/MoviesCardList';

function Movies() {
  return (
    <React.Fragment>
      <Header className='movies__header'>
        <div className='movies__nav-container'>
          <ul className='movies__navbar'>
            <li><Link to='/movies' className='link'>Фильмы</Link></li>
            <li><Link to='/saved-movies' className='link'>Сохранённые фильмы</Link></li>
          </ul>
          <Link className='movies__link' to='/signin'>
                <button className='movies__button'>Аккаунт</button>
          </Link>
        </div>
      </Header>
      <SearchForm />
      <MoviesCardList />
      <Footer />
    </React.Fragment>
  );
}

export default Movies;