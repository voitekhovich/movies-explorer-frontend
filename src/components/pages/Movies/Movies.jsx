import './Movies.css';

import React, { useEffect, useState } from 'react';
import MoviesCardList from '../../MoviesCardList/MoviesCardList';
import SearchForm from '../../SearchForm/SearchForm';
import { moviesApi } from '../../../utils/MoviesApi';
import { DATA_NOT_FOUND, GET_DATA_ERROR } from '../../../utils/constants';
import Preloader from '../../Preloader/Preloader';
import { useMovies } from '../../../hooks/useMovies';
import { useMoreCards, useWindowSize } from '../../../hooks/useMoreCards';
import { api } from "../../../utils/Api";

function Movies() {

  const [ movies, setMovies ] = useState((JSON.parse(localStorage.getItem('movies'))) || []);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ infoMessage, setInfoMessage ] = useState(DATA_NOT_FOUND);
  const [ filter, setFilter ] = useState((JSON.parse(localStorage.getItem('filter'))) || ({shortFilms: false, searchQuery: ''}));
  
  const filteredAndSearchedMovies = useMovies(movies, filter.shortFilms, filter.searchQuery);

  const [ countItems, setCountItems ] = useState(0);
  const [ addItems, setAddItems ] = useState(0)
  const [ result, setResult ] = useState([])
  const [ isVisibBtn, setIsVisibBtn ] = useState(true);
  
  const windowWidth = useWindowSize();
  const moreCardsCount = useMoreCards();


  const searchHandle = (searchQuery) => {
    if (searchQuery === '') return console.log('Нужно ввести ключевое слово');
    setFilter({...filter, searchQuery: searchQuery})
    if (!movies.length) loadData();
  }

  const morecardsHandle = () => {
    setCountItems(countItems + addItems)
  }

  const loadData = () => {
    setIsLoading(true)
    setInfoMessage(DATA_NOT_FOUND)
    
    Promise.all([moviesApi.getAllData(), api.getInitialCards()])
      .then(([data, savedCards]) => {
        setMovies(data.map((item) => (
          {
            isLike: savedCards.some((i) => i.movieId === item.id),
            ...item,
          }
        )));
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

  const handleCardLike = (card) => {
    // console.log(card)
    api
      .changeLikeCardStatus(card, !card.isLike)
      .then((newCard) => {
        // setMovies((state) =>
          // state.map((c) => (c.movieId === card.movieId ? newCard : c))
          // card.isLike = 
        // );
        card.isLike = !card.isLike;
        console.log(card);
        console.log('Saved!')
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
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

    setResult(filteredAndSearchedMovies.slice(0, countItems));
    
  }, [filteredAndSearchedMovies, countItems])


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
              <MoviesCardList data={result} infoMessage={infoMessage} onCardLike={handleCardLike} />
        }
        
        { isVisibBtn ? <button className='movies__more button-hover' type='button' onClick={morecardsHandle}>Ещё</button> : <div></div>}
      </section>
    </main>
  );
}

export default Movies;