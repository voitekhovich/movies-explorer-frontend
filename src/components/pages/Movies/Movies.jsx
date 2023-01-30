import "./Movies.css";

import React, { useEffect, useState } from "react";
import MoviesCardList from "../../MoviesCardList/MoviesCardList";
import SearchForm from "../../SearchForm/SearchForm";
import { moviesApi } from "../../../utils/MoviesApi";
import Preloader from "../../Preloader/Preloader";
import { api } from "../../../utils/Api";
import { useMoviesCountItems } from "../../../hooks/useMoviesCountItems";

function Movies() {
  const [isLoading, setIsLoading] = useState(false);
  const [infoMessage, setInfoMessage] = useState('');
  const [movList, setMovList] = useState([]);
  const [filter, setFilter] = useState({ query: "", checkBox: false });

  const [counter, setCounter] = useState(0);

  const [resultMoviesList, moreCardsState] = useMoviesCountItems(
    movList,
    filter.checkBox,
    filter.query,
    counter
  );

  const moreCardsHadle = () => {
    setCounter((counter) => counter + 1);
    console.log(counter);
  };

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
    setInfoMessage('');

    if (query === "") {
      setInfoMessage("Нужно ввести ключевое слово");
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
        .catch((err) => {
          setInfoMessage(err);
          console.log(err);
        })
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
  }, [resultMoviesList]);

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
        {infoMessage && <p className="movies__info-message">{infoMessage}</p>}

        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList
            data={resultMoviesList}
            handleLikeClick={handleLikeClick}
          />
        )}

        {moreCardsState ? (
          <button
            className="movies__more button-hover"
            type="button"
            onClick={moreCardsHadle}
          >
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
