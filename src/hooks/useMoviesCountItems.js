import { useEffect, useMemo, useState } from "react";
import { useMoreCards, useWindowSize } from "./useMoreCards";

export const useFilteredMovies = (movies, filter) => {
  const filteredMovies = useMemo(() => {
    if (filter)
      return [...movies].filter((item) => item.duration <= 40 && item);
    return movies;
  }, [filter, movies]);

  return filteredMovies;
};

export const useMovies = (movies, filter, query) => {
  const filteredMovies = useFilteredMovies(movies, filter);

  const filteredMoviesAndSearch = useMemo(() => {
    return filteredMovies.filter((item) =>
      item.nameRU.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, filteredMovies]);

  return filteredMoviesAndSearch;
};

export const useMoviesCountItems = (movies, filter, query, counter) => {

  const [ nowCountItems, setNowCountItems ] = useState(0);
  const [ moreCardsState, setMoreCardsState ] = useState(false);
  const filteredMovies = useMovies(movies, filter, query);
  const moreCardsCount = useMoreCards();
  const windowWidth = useWindowSize();

  const firsHandler = () => {
    if (windowWidth < 633) return setNowCountItems(3);
    if (windowWidth < 1137) return setNowCountItems(4);
    setNowCountItems(6);
  }

  useEffect(() => {
    firsHandler();
  }, [])

  useEffect(() => {
    if (counter === 0) {
      firsHandler();
      return;
    }
    const pers = nowCountItems % moreCardsCount;

    if ( pers > 0) {
      setNowCountItems(nowCountItems => nowCountItems + moreCardsCount - pers + moreCardsCount);
    } else {
      setNowCountItems(nowCountItems => nowCountItems + moreCardsCount)
    }
    
  }, [counter])

  const resultMoviesList = useMemo(() => {
    const result = filteredMovies.slice(0, nowCountItems);
    result.length < filteredMovies.length ? setMoreCardsState(true) : setMoreCardsState(false);
    return result;
  }, [filter, query, nowCountItems]);

  return [ resultMoviesList, moreCardsState ];
};
