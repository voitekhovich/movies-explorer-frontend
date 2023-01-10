import './SavedMovies.css';

import React, { useContext, useState } from 'react';
import MoviesCardList from '../../MoviesCardList/MoviesCardList';
import { api } from "../../../utils/Api";
import SearchForm from '../../SearchForm/SearchForm';
import { CurrentUserContext } from '../../../contexts/CurrentUserContext';
import Preloader from '../../Preloader/Preloader';

function SavedMovies() {
  const [ savedMovies, setSavedMovies ] = useState([]);
  const [ filter, setFilter ] = useState({shortFilms: false, searchQuery: ''});
  const [ isLoading, setIsLoading ] = useState(false);
  // const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  // const filteredAndSearchedMovies = useMovies(movies, filter.shortFilms, filter.searchQuery);

  const searchHandle = () => {
    console.log(savedMovies.length);
    // if (!savedMovies.length) loadData();
  }

  React.useEffect(() => {
    // setIsLoading(true);
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
              <MoviesCardList data={savedMovies} />
        }
      </section>
    </main>  
  );
}

export default SavedMovies;