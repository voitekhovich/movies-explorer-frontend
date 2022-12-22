import './SavedMovies.css';

import React from 'react';
import MoviesCardList from '../../MoviesCardList/MoviesCardList';
import { data } from '../../../utils/data.js'
import SearchForm from '../../SearchForm/SearchForm';

function SavedMovies() {
  return (
    <main className='main'>
      <SearchForm />
      <section className="saved-movies">
        <MoviesCardList data={ data.slice(0, 3) }/>
      </section>
    </main>  
  );
}

export default SavedMovies;