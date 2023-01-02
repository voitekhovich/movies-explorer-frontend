import './SavedMovies.css';

import React, { useState } from 'react';
import MoviesCardList from '../../MoviesCardList/MoviesCardList';
import { data } from '../../../utils/data.js'
import SearchForm from '../../SearchForm/SearchForm';

function SavedMovies() {
  const [ savedMovies, setSavedMovies ] = useState([]);
  const [ filter, setFilter ] = useState({shortFilms: false, searchQuery: ''});

  // const filteredAndSearchedMovies = useMovies(movies, filter.shortFilms, filter.searchQuery);

  const searchHandle = () => {
    console.log(savedMovies.length);
    // if (!savedMovies.length) loadData();
  }
  return (
    <main className='main'>
      <SearchForm 
        submitClick={ searchHandle }
        filter={filter}
        setFilter={setFilter}/>
      <section className="saved-movies">
        <MoviesCardList data={ savedMovies }/>
      </section>
    </main>  
  );
}

export default SavedMovies;