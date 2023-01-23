import "./Movies.css";

import React, { useEffect, useState } from "react";
import MoviesCardList from "../../MoviesCardList/MoviesCardList";
import SearchForm from "../../SearchForm/SearchForm";
import { moviesApi } from "../../../utils/MoviesApi";
import Preloader from "../../Preloader/Preloader";
import { mainApi } from "../../../utils/MainApi";
import { useCountMoviesItems } from "../../../hooks/useCountMoviesItems";
import {
  BEATFILM_API_URL,
  GET_DATA_ERROR,
  NEED_KEY_WORD,
} from "../../../utils/constants";

function Movies({ tokenCheck }) {
  const [isLoading, setIsLoading] = useState(false);
  const [infoMessage, setInfoMessage] = useState("");
  const [movList, setMovList] = useState([]);
  const [filter, setFilter] = useState({ query: "", checkBox: false });
  const [pageCounter, setPageCounter] = useState(0);
  const [resultMoviesList, moreCardsState] = useCountMoviesItems(
    movList,
    filter.checkBox,
    filter.query,
    pageCounter
  );

  const moreCardsHadle = () => {
    setPageCounter((counter) => counter + 1);
  };

  const loadFirstData = () => {
    return Promise.all([
      moviesApi.getAllData(),
      mainApi.getInitialCards(),
    ]).then(([moviesData, savedCards]) => {
      return moviesData.map((item) => {
        item.thumbnail = `${BEATFILM_API_URL}${item.image.formats.thumbnail.url}`;
        item.image = `${BEATFILM_API_URL}${item.image.url}`;
        const sCard = savedCards.find((i) => i.movieId === item.id);
        if (!sCard) return item;
        return {
          isLike: sCard._id,
          ...item,
        };
      });
    });
  };

  async function handleSearchClick(query) {
    setInfoMessage("");

    if (query === "") {
      setInfoMessage(NEED_KEY_WORD);
    }

    setIsLoading(true);

    if (!movList.length)
      await loadFirstData()
        .then((data) => {
          setMovList(data);
        })
        .catch((err) => {
          setInfoMessage(GET_DATA_ERROR);
          console.log(err);
        });

    setFilter((filter) => ({ ...filter, query }));
    setPageCounter(0);

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
    setInfoMessage(JSON.parse(localStorage.getItem("infoMessage")) || "");
  }, []);

  useEffect(() => {
    localStorage.setItem("filter", JSON.stringify(filter));
    localStorage.setItem("movList", JSON.stringify(movList));
  }, [resultMoviesList, infoMessage]);

  useEffect(() => {
    localStorage.setItem("infoMessage", JSON.stringify(infoMessage));
  }, [resultMoviesList, infoMessage]);

  const handleLikeClick = (card) => {
    mainApi
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
        submitClick={!isLoading ? handleSearchClick : () => {}}
      />

      <section className="movies">
        {isLoading ? (
          <Preloader />
        ) : infoMessage ? (
          <p className="movies__info-message">{infoMessage}</p>
        ) : (
          <React.Fragment>
            <MoviesCardList
              data={resultMoviesList}
              handleLikeClick={handleLikeClick}
            />
            {moreCardsState && (
              <button
                className="movies__more button-hover"
                type="button"
                onClick={moreCardsHadle}
              >
                Ещё
              </button>
            )}
          </React.Fragment>
        )}
      </section>
    </main>
  );
}

export default Movies;
