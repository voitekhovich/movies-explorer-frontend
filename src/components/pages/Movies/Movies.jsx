import './Movies.css';

import React from 'react';
import MoviesCardList from '../../MoviesCardList/MoviesCardList';
import { data } from '../../../utils/data.js'
import SearchForm from '../../SearchForm/SearchForm';

function Movies() {
  return (
    <main>
      <SearchForm />
      <section className="movies">
        <MoviesCardList data={ data }/>
        <button className='movies__more button-hover'>Ещё</button>
      </section>
    </main>
  );
}

export default Movies;