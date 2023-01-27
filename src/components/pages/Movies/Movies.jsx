import "./Movies.css";

import React, { useEffect, useState } from "react";
import MoviesCardList from "../../MoviesCardList/MoviesCardList";
import SearchForm from "../../SearchForm/SearchForm";
import { moviesApi } from "../../../utils/MoviesApi";
import { DATA_NOT_FOUND } from "../../../utils/constants";
import Preloader from "../../Preloader/Preloader";
import { api } from "../../../utils/Api";
import { useMovies } from "../../../hooks/useMovies";
import { useMoviesCountItems } from "../../../hooks/useMoviesCountItems";
import { useMoreCards, useWindowSize } from "../../../hooks/useMoreCards";

function Movies() {
  const [isLoading, setIsLoading] = useState(false);
  const [infoMessage, setInfoMessage] = useState(DATA_NOT_FOUND);
  const [isVisibBtn, setIsVisibBtn] = useState(true);
  const [movList, setMovList] = useState([]);
  const [filter, setFilter] = useState({ query: "", checkBox: false });

  // const windowWidth = useWindowSize();
  // const moreCardsCount = useMoreCards();
  const [counter, setCounter ] = useState(0);

  // const newListsMovies = useMoviesCountItems(
  //   movList,
  //   filter.checkBox,
  //   filter.query
  // );

  // useEffect(() => {
  //   console.log(windowWidth);
  //   console.log(moreCardsCount);
  //   console.log(newListsMovies);
  // }, [newListsMovies]);

  // const filteredAndSearchedMovies = useMovies(
  //   movList,
  //   filter.checkBox,
  //   filter.query
  // );

  const filteredAndSearchedMovies = useMoviesCountItems(
    movList,
    filter.checkBox,
    filter.query,
    counter
  );

  const moreCardsHadle = () => {
    setCounter(counter => counter+1);
    console.log(counter);
  }

  const loadFirstData = () => {
    return Promise.all([moviesApi.getAllData(), api.getInitialCards()]).then(
      ([moviesData, savedCards]) => {
        return moviesData.map((item) => {
          const sCard = savedCards.find((i) => i.movieId === item.id);
          if (!sCard) return item;
          return {
            isLike: sCard._id,
            ...item,
          };
        });
      }
    );
  };

  async function handleSearchClick(query) {
    if (query === "") {
      return console.log("Нужно ввести ключевое слово");
    }

    setIsLoading(true);
    setCounter(0);
    setFilter((filter) => ({ ...filter, query }));

    if (!movList.length)
      await loadFirstData()
        .then((data) => {
          setMovList(data);
          return data;
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setIsLoading(false);
          return;
        });

    setIsLoading(false);
  }

  useEffect(() => {
    setMovList(JSON.parse(localStorage.getItem("movList")) || []);
    setFilter(
      JSON.parse(localStorage.getItem("filter")) || {
        query: "",
        checkBox: false,
      }
    );
  }, []);

  useEffect(() => {
    localStorage.setItem("filter", JSON.stringify(filter));
    localStorage.setItem("movList", JSON.stringify(movList));
  }, [filteredAndSearchedMovies]);

  const handleLikeClick = (card) => {
    api
      .changeLikeCardStatus(card)
      .then((newCard) => {
        setMovList((state) =>
          state.map((item) => {
            if (item.id === newCard.movieId)
              item.isLike ? delete item.isLike : (item.isLike = newCard._id);
            return item;
          })
        );
      })
      .catch((err) => console.log(err));
  };

  return (
    <main>
      <SearchForm
        filter={filter}
        setFilter={setFilter}
        submitClick={handleSearchClick}
      />

      <section className="movies">
        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList
            data={filteredAndSearchedMovies}
            infoMessage={infoMessage}
            handleLikeClick={handleLikeClick}
          />
        )}

        {isVisibBtn ? (
          <button className="movies__more button-hover" type="button" onClick={moreCardsHadle}>
            Ещё
          </button>
        ) : (
          <div></div>
        )}
      </section>
    </main>
  );
}

export default Movies;
