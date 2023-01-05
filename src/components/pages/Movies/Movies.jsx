import './Movies.css';

import React, { useEffect, useRef, useState } from 'react';
import MoviesCardList from '../../MoviesCardList/MoviesCardList';
import SearchForm from '../../SearchForm/SearchForm';
import { moviesApi } from '../../../utils/MoviesApi';
import { DATA_NOT_FOUND, GET_DATA_ERROR } from '../../../utils/constants';
import Preloader from '../../Preloader/Preloader';
import { useMovies } from '../../../hooks/useMovies';

function Movies() {

  // const gridColumns = useRef(0);

  const [ movies, setMovies ] = useState((JSON.parse(localStorage.getItem('movies'))) || []);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ infoMessage, setInfoMessage ] = useState(DATA_NOT_FOUND);
  const [ filter, setFilter ] = useState((JSON.parse(localStorage.getItem('filter'))) || ({shortFilms: false, searchQuery: ''}));

  const filteredAndSearchedMovies = useMovies(movies, filter.shortFilms, filter.searchQuery);

  const [ countItems, setCountItems ] = useState(0);
  const [ addItems, setAddItems ] = useState(0)
  const [ items, setItems ] = useState([])
  const [ isVisibBtn, setIsVisibBtn ] = useState(true);
  const [ pageWidth, setPageWidth ] = useState(0);
  const [ gridCount, setGridCount ] = useState(0);

  const searchHandle = () => {
    if (!movies.length) loadData();
    // setCountItems(4);
  }

  const addHandle = () => {
    setCountItems( count => count + addItems)
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
        // console.log('finally');
      })
  }

  const getGridColumns = (gridColumns) => {
    // console.log(gridColumns);
  };


  useEffect(() => {

    switch(gridCount) {
      case 1:  // if (x === 'value1')
        setCountItems(5);
        setAddItems(1);
        break;
      case 2:  // if (x === 'value2')
        setCountItems(8);
        setAddItems(2);
        break;
      // case 3:    
      default:
        setCountItems(12);
        setAddItems(3);
        break;
    }

    // if (pageWidth < 480) {
    //   setCountItems(5);
    //   setAddItems(1)
    //   return 
    // }
    // if (pageWidth < 1024) {
    //   setCountItems(8)
    //   setAddItems(2);
    //   return
    // }
    // setCountItems(12);
    // setAddItems(3);
  }, [gridCount])

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
              <MoviesCardList data={items} infoMessage={infoMessage} getGridColumns={getGridColumns} />
        }
        
        { isVisibBtn ? <button className='movies__more button-hover' type='button' onClick={addHandle}>Ещё</button> : <div></div>}
      </section>
    </main>
  );
}

export default Movies;