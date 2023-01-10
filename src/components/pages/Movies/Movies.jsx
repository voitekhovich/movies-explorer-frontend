import './Movies.css';

import React, { useContext, useEffect, useState } from 'react';
import MoviesCardList from '../../MoviesCardList/MoviesCardList';
import SearchForm from '../../SearchForm/SearchForm';
import { moviesApi } from '../../../utils/MoviesApi';
import { DATA_NOT_FOUND, GET_DATA_ERROR } from '../../../utils/constants';
import Preloader from '../../Preloader/Preloader';
import { useMovies } from '../../../hooks/useMovies';
import { useMoreCards, useWindowSize } from '../../../hooks/useMoreCards';
import { CurrentUserContext } from '../../../contexts/CurrentUserContext';
import { api } from "../../../utils/Api";

function Movies() {

  const [ movies, setMovies ] = useState((JSON.parse(localStorage.getItem('movies'))) || []);
  const [ savedMovies, setSavedMovies ] = useState([]);
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

  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);


  const searchHandle = () => {
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
        setMovies(data);
        setSavedMovies(savedCards);
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
    // const isLiked = card.likes.some((i) => i._id === currentUser._id);
    // const isLiked = card.likes.some((i) => i === currentUser._id);
    const isLiked = false;

    api
      .changeLikeCardStatus(card, !isLiked)
      .then((newCard) => {
        // setItems((state) =>
        //   state.map((c) => (c.movieId === card.movieId ? newCard : c))
        // );
        console.log('Saved!')
      })
      .catch((err) => console.log(err));
  };

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
              <MoviesCardList data={items} savedMovies={savedMovies} infoMessage={infoMessage} onCardLike={handleCardLike} />
        }
        
        { isVisibBtn ? <button className='movies__more button-hover' type='button' onClick={morecardsHandle}>Ещё</button> : <div></div>}
      </section>
    </main>
  );
}

export default Movies;