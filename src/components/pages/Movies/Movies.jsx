import './Movies.css';

import React, { useEffect, useState } from 'react';
import MoviesCardList from '../../MoviesCardList/MoviesCardList';
import SearchForm from '../../SearchForm/SearchForm';
import { moviesApi } from '../../../utils/MoviesApi';
import { DATA_NOT_FOUND, GET_DATA_ERROR } from '../../../utils/constants';
import Preloader from '../../Preloader/Preloader';

function Movies() {
  
  const [ moviesData, setMoviesData ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ infoMessage, setInfoMessage ] = useState(DATA_NOT_FOUND);
  const [ isFilterCheck, setIsFilterCheck ] = useState(false);

  const [ moviesArray, setMoviesArray ] = useState([]);
  // const [ lastElement, setLastElement ] = useState(0);

  const filterCheckHandle = () => {
    setIsFilterCheck(!isFilterCheck);
  }

  const getPartData = () => {
    setMoviesArray(moviesData.slice(0, 12));
    // setLastElement(12);
    console.log(moviesData.slice(0, 12));
  }

  const loadPartData = (evt) => {
    evt.preventDefault();
    const arr = moviesData.slice(0, 15);
    setMoviesArray((arr));
    console.log(moviesArray);
  }

  const getMoviesData = () => {
    setIsLoading(true)
    setInfoMessage(DATA_NOT_FOUND)

    moviesApi.getAllData()
      .then((data) => {
        setMoviesData(data);
        getPartData();
        // setMoviesArray(getPartData(data));
        console.log(data);
        // console.log(moviesData);
      })
      .catch((err) => {
        console.log(err);
        setInfoMessage(GET_DATA_ERROR);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  useEffect(() => {
    getMoviesData();
  }, []);

  return (
    <main>
      <SearchForm submitClick={ getMoviesData } filterCheck={ filterCheckHandle } isFilterCheck={ isFilterCheck } />
      <section className="movies">

        { isLoading ? <Preloader /> :
            moviesArray.length > 0 ? <MoviesCardList data={ moviesArray }/> : <p className='movies__info-message'>{ infoMessage }</p>
        }
        
        <button className='movies__more button-hover' type='button' onClick={loadPartData}>Ещё</button>
      </section>
    </main>
  );
}

export default Movies;