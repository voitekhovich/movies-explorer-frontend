import './Movies.css';

import React from 'react';
import Header from '../../Header/Header';
import SearchForm from '../../SearchForm/SearchForm';
import MoviesCardList from '../../MoviesCardList/MoviesCardList';
import Footer from '../../Footer/Footer';

function Movies() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <SearchForm />
        <MoviesCardList />
    </main>
    <Footer />
    </React.Fragment>
  );
}

export default Movies;