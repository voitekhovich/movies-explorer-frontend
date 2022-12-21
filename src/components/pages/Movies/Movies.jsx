import './Movies.css';

import React from 'react';
import Header from '../../Header/Header';
import SearchForm from '../../SearchForm/SearchForm';
import MoviesCardList from '../../MoviesCardList/MoviesCardList';
import Footer from '../../Footer/Footer';
import { data } from '../../../utils/data.js'

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
    </React.Fragment>
  );
}

export default Movies;