import './Movies.css';

import React, { useEffect, useState } from 'react';
import MoviesCardList from '../../MoviesCardList/MoviesCardList';
import SearchForm from '../../SearchForm/SearchForm';
import { moviesApi } from '../../../utils/MoviesApi';
import { DATA_NOT_FOUND, GET_DATA_ERROR } from '../../../utils/constants';
import Preloader from '../../Preloader/Preloader';
import { useMovies } from '../../../hooks/useMovies';
import { useMoreCards, useWindowSize } from '../../../hooks/useMoreCards';

function Movies() {

  const [ movies, setMovies ] = useState((JSON.parse(localStorage.getItem('movies'))) || []);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ infoMessage, setInfoMessage ] = useState(DATA_NOT_FOUND);
  const [ filter, setFilter ] = useState((JSON.parse(localStorage.getItem('filter'))) || ({shortFilms: false, searchQuery: ''}));
  
  const filteredAndSearchedMovies = useMovies(movies, filter.shortFilms, filter.searchQuery);

  const [ countItems, setCountItems ] = useState(0);
  const [ addItems, setAddItems ] = useState(0)
  const [ items, setItems ] = useState([])
  const [ isVisibBtn, setIsVisibBtn ] = useState(true);
  
  const windowWidth = useWindowSize();
  const moreCardsCount = useMoreCards();


  const searchHandle = () => {
    if (!movies.length) loadData();
  }

  const morecardsHandle = () => {
    setCountItems(countItems + addItems)
  }

  const loadData = () => {
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
      })
  }

  useEffect(() => {
    console.log(windowWidth);
    if (windowWidth < 633) return setCountItems(5);
    if (windowWidth < 1137) return setCountItems(8);
    setCountItems(12);
  }, [windowWidth])

  useEffect(() => {
    setAddItems(moreCardsCount);
  }, [moreCardsCount])

  useEffect(() => {
    localStorage.setItem('movies', JSON.stringify(movies));
  }, [movies])

  useEffect(() => {
    localStorage.setItem('filter', JSON.stringify(filter));
  }, [filter])

  useEffect(() => {
    if (countItems < filteredAndSearchedMovies.length)
    {
      setIsVisibBtn(true);
    } else {
      setIsVisibBtn(false);
    };

    setItems(filteredAndSearchedMovies.slice(0, countItems));
    console.log(`ALL: ${filteredAndSearchedMovies.length} NOW: ${countItems}`)
    
  }, [filteredAndSearchedMovies, countItems])

  // useEffect(() => {
  //   console.log(moreCardsCount);
  // }, [moreCardsCount])

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
              <MoviesCardList data={items} infoMessage={infoMessage} />
        }
        
        { isVisibBtn ? <button className='movies__more button-hover' type='button' onClick={morecardsHandle}>Ещё</button> : <div></div>}
      </section>
    </main>
  );
}

export default Movies;