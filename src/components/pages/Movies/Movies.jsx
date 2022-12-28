import './Movies.css';

import React, { useState } from 'react';
import MoviesCardList from '../../MoviesCardList/MoviesCardList';
import SearchForm from '../../SearchForm/SearchForm';
import { moviesApi } from '../../../utils/MoviesApi';
import { DATA_NOT_FOUND, GET_DATA_ERROR } from '../../../utils/constants';
import Preloader from '../../Preloader/Preloader';

function Movies() {
  
  const [ allMovies, setAllMovies ] = useState([]);
  const [ filteredMovies, setFilteredMovies ] = useState([]);

  const [ isLoading, setIsLoading ] = useState(false);
  const [ infoMessage, setInfoMessage ] = useState(DATA_NOT_FOUND);
  const [ isFilterCheck, setIsFilterCheck ] = useState(false);
  
  // const [ lastElement, setLastElement ] = useState(0);

  const filterCheckHandle = () => {
    setIsFilterCheck(!isFilterCheck);
  }

  const getFilteredMovies = (text, data) => {
    setFilteredMovies(data.filter( item => item.nameRU.toLowerCase().includes(text.toLowerCase())));
  }

  async function getAllMovies() {
    setIsLoading(true)
    setInfoMessage(DATA_NOT_FOUND)

    moviesApi.getAllData()
    .then((data) => {
      setAllMovies(data);
      console.log('data loading');
    })
    .catch((err) => {
      console.log(err);
      setInfoMessage(GET_DATA_ERROR);
    })
    .finally(() => {
      setIsLoading(false);
    })
  }

  // ПРОБЛЕМА С СИНХРОННОСТЬЮ

  const searchHandle = (searchText) => {

    if (allMovies.length === 0) getAllMovies()
    .then(() => {
      console.log('надеюсь я не здесь');
      setFilteredMovies(getFilteredMovies(searchText, allMovies));
      console.log(filteredMovies);
    })
    
  }

  return (
    <main>
      <SearchForm submitClick={ searchHandle } filterCheck={ filterCheckHandle } isFilterCheck={ isFilterCheck } />
      <section className="movies">

        { isLoading ? <Preloader /> :
            filteredMovies.length > 0 ? <MoviesCardList data={ filteredMovies }/> : <p className='movies__info-message'>{ infoMessage }</p>
        }
        
        <button className='movies__more button-hover' type='button'>Ещё</button>
      </section>
    </main>
  );
}

export default Movies;