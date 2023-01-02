import './Movies.css';

import React, { useEffect, useState } from 'react';
import MoviesCardList from '../../MoviesCardList/MoviesCardList';
import SearchForm from '../../SearchForm/SearchForm';
import { moviesApi } from '../../../utils/MoviesApi';
import { DATA_NOT_FOUND, GET_DATA_ERROR } from '../../../utils/constants';
import Preloader from '../../Preloader/Preloader';
import { useMovies } from '../../../hooks/useMovies';

function Movies() {
  
  const [ movies, setMovies ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ infoMessage, setInfoMessage ] = useState(DATA_NOT_FOUND);
  const [ filter, setFilter ] = useState({shortFilms: false, searchQuery: ''});

  const filteredAndSearchedMovies = useMovies(movies, filter.shortFilms, filter.searchQuery);

  const searchHandle = () => {
    console.log(movies.length);
    localStorage.setItem('shortFilms', filter.shortFilms);
    localStorage.setItem('searchQuery', filter.searchQuery);
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
    console.log('load page');
    setFilter({
      shortFilms: !!!localStorage.getItem('shortFilms'),
      searchQuery: localStorage.getItem('searchQuery'),
    })

    return () => {
      console.log('save page');
      localStorage.setItem('shortFilms', filter.shortFilms);
      console.log(filter.shortFilms);
      localStorage.setItem('searchQuery', filter.searchQuery);
      console.log(filter.searchQuery);
    }
    
  }, []);

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