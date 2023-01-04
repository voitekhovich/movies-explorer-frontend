import './Movies.css';

import React, { useEffect, useState } from 'react';
import MoviesCardList from '../../MoviesCardList/MoviesCardList';
import SearchForm from '../../SearchForm/SearchForm';
import { moviesApi } from '../../../utils/MoviesApi';
import { DATA_NOT_FOUND, GET_DATA_ERROR } from '../../../utils/constants';
import Preloader from '../../Preloader/Preloader';
import { useMovies } from '../../../hooks/useMovies';

function Movies() {
  
  const [ movies, setMovies ] = useState((JSON.parse(localStorage.getItem('movies'))) || []);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ infoMessage, setInfoMessage ] = useState(DATA_NOT_FOUND);
  const [ filter, setFilter ] = useState((JSON.parse(localStorage.getItem('filter'))) || ({shortFilms: false, searchQuery: ''}));

  const filteredAndSearchedMovies = useMovies(movies, filter.shortFilms, filter.searchQuery);

  const searchHandle = () => {
    if (!movies.length) loadData();
  }

  const loadData = () => {
    console.log('loadData');
    setIsLoading(true)
    setInfoMessage(DATA_NOT_FOUND)
    
    moviesApi.getAllData()
      .then((data) => {
        setMovies(data);
        return data;
      })
      .catch((err) => {
        console.log(err);
        setInfoMessage(GET_DATA_ERROR);
      })
      .finally(() => {
        setIsLoading(false);
        // console.log('finally');
      })
  }

  useEffect(() => {
    // console.log(movies);
    localStorage.setItem('movies', JSON.stringify(movies));
  }, [movies])

  useEffect(() => {
    // console.log(filter);
    localStorage.setItem('filter', JSON.stringify(filter));
  }, [filter])

  return (
    <main>
      <SearchForm
        submitClick={ searchHandle }
        filter={filter}
        setFilter={setFilter}/>
      
      <section className="movies">

        { isLoading
            ? 
              <Preloader />
            : 
              <MoviesCardList data={filteredAndSearchedMovies} infoMessage={infoMessage}/>
        }
        
        <button className='movies__more button-hover' type='button'>Ещё</button>
      </section>
    </main>
  );
}

export default Movies;