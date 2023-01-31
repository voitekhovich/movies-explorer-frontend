import { useEffect, useMemo, useState } from "react";
import { useMoreCards } from "./useMoreCards";
import { useMovies } from "./useMovies";

export const useCountMoviesItems = (movies, filter, query, counter) => {
  const [nowCountItems, setNowCountItems] = useState(0);
  const [moreCardsState, setMoreCardsState] = useState(false);
  const filteredMovies = useMovies(movies, filter, query);
  const [windowWidth, moreCardsCount] = useMoreCards();

  const firsHandler = () => {
    if (windowWidth < 633) return setNowCountItems(3);
    if (windowWidth < 1137) return setNowCountItems(4);
    setNowCountItems(6);
  };

  useEffect(() => {
    firsHandler();
  }, []);

  useEffect(() => {
    if (counter === 0) {
      firsHandler();
      return;
    }
    const pers = nowCountItems % moreCardsCount;

    if (pers > 0) {
      setNowCountItems(
        (nowCountItems) =>
          nowCountItems + moreCardsCount - pers + moreCardsCount
      );
    } else {
      setNowCountItems((nowCountItems) => nowCountItems + moreCardsCount);
    }
  }, [counter]);

  const resultMoviesList = useMemo(() => {
    const result = filteredMovies.slice(0, nowCountItems);
    result.length < filteredMovies.length
      ? setMoreCardsState(true)
      : setMoreCardsState(false);
    return result;
  }, [filter, query, nowCountItems]);

  return [resultMoviesList, moreCardsState];
};
