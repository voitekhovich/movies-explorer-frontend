import './Movies.css';

import React from 'react';
import Header from '../../Header/Header';
import SearchForm from '../../SearchForm/SearchForm';
import MoviesCardList from '../../MoviesCardList/MoviesCardList';
import Footer from '../../Footer/Footer';
import { data } from '../../../utils/data.js'
import BurgerNavigation from '../../BurgerNavigation/BurgerNavigation';

function Movies() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <SearchForm />
        <section className="movies">
          <MoviesCardList data={ data }/>
          <button className='movies__more button-hover'>Ещё</button>
        </section>
      </main>
      <Footer />
      <BurgerNavigation />
    </React.Fragment>
  );
}

export default Movies;