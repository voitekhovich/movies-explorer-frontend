import './SavedMovies.css';

import React, { useState } from 'react';
import MoviesCardList from '../../MoviesCardList/MoviesCardList';
import { api } from "../../../utils/Api";
import SearchForm from '../../SearchForm/SearchForm';
import Preloader from '../../Preloader/Preloader';
import { useMovies } from '../../../hooks/useMovies';

function SavedMovies() {
  const [ savedMovies, setSavedMovies ] = useState([]);
  const [ filter, setFilter ] = useState({shortFilms: false, searchQuery: ''});
  const [ isLoading, setIsLoading ] = useState(false);
  const [ result, setResult ] = useState([])

  const filteredAndSearchedMovies = useMovies(savedMovies, filter.shortFilms, filter.searchQuery);

  const searchHandle = (searchQuery) => {
    setFilter({...filter, searchQuery: searchQuery})
  }

  React.useEffect(() => {
    setResult(filteredAndSearchedMovies);
  }, [filter]);

  React.useEffect(() => {
    setIsLoading(true);
    // onTokenCheck();
    api.getInitialCards()
      .then((movies) => {
        setSavedMovies(movies);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <main className='main'>
      <SearchForm 
        submitClick={ searchHandle }
        filter={filter}
        setFilter={setFilter}/>
      <section className="saved-movies">
        { isLoading
            ? 
              <Preloader />
            : 
              <MoviesCardList data={ result } />
        }
      </section>
    </main>  
  );
}

export default SavedMovies;