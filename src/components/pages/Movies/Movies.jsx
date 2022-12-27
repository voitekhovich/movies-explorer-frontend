import './Movies.css';

import React, { useState } from 'react';
import MoviesCardList from '../../MoviesCardList/MoviesCardList';
import { data } from '../../../utils/data.js'
import SearchForm from '../../SearchForm/SearchForm';

import { moviesApi } from '../../../utils/MoviesApi'; 

function Movies() {
  
  const [ moviesData, setMoviesData ] = useState({});

  const getMoviesData = () => {
    moviesApi.getAllData()
      .then((data) => {
        setMoviesData(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <main>
      <SearchForm onClick={ getMoviesData }/>
      <section className="movies">
        <MoviesCardList data={ data }/>
        <button className='movies__more button-hover'>Ещё</button>
      </section>
    </main>
  );
}

export default Movies;