import './SavedMovies.css';

import React from 'react';
import Header from '../../Header/Header';
import SearchForm from '../../SearchForm/SearchForm';
import MoviesCardList from '../../MoviesCardList/MoviesCardList';
import Footer from '../../Footer/Footer';
import { data } from '../../../utils/data.js'

function SavedMovies() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <SearchForm />
        <section className="movies">
          <MoviesCardList data={ data.slice(0, 3) }/>
        </section>
      </main>
      <Footer />
    </React.Fragment>
    
  );
}

export default SavedMovies;