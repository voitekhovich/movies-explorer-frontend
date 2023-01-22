import "./Movies.css";

import React, { useEffect, useState } from "react";
import MoviesCardList from "../../MoviesCardList/MoviesCardList";
import SearchForm from "../../SearchForm/SearchForm";
import { moviesApi } from "../../../utils/MoviesApi";
import { DATA_NOT_FOUND } from "../../../utils/constants";
import Preloader from "../../Preloader/Preloader";
import { api } from "../../../utils/Api";

function Movies() {
  const [isLoading, setIsLoading] = useState(false);
  const [infoMessage, setInfoMessage] = useState(DATA_NOT_FOUND);

  const [isVisibBtn, setIsVisibBtn] = useState(true);

  const [movList, setMovList] = useState([]);
  const [resList, setResList] = useState([]);
  const [filter, setFilter] = useState({ query: "", checkBox: false });

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

  const filterData = (data, query) => {
    return data.filter((item) =>
      item.nameRU.toLowerCase().includes(query.toLowerCase())
    );
  };

  const checkData = (data) => {
    return data.filter((item) => item.duration <= 40 && item);
  };

  async function handleSearchClick() {
    if (filter.query === "") {
      return console.log("Нужно ввести ключевое слово");
    }

    setIsLoading(true);

    let data = [];
    if (!movList.length)
      data = await loadFirstData().then((data) => {
        setMovList(data);
        return data;
      });
    else data = movList;

    let result = filterData(data, filter.query);
    if (filter.checkBox) result = checkData(result);

    setResList(result);

    localStorage.setItem("filter", JSON.stringify(filter));
    localStorage.setItem("resList", JSON.stringify(result));

    setIsLoading(false);
  }

  useEffect(() => {
    setResList(JSON.parse(localStorage.getItem("resList")) || []);
    setFilter(
      JSON.parse(localStorage.getItem("filter")) || {
        query: "",
        checkBox: false,
      }
    );
  }, []);

  const handleLikeClick = (card) => {
    api
      .changeLikeCardStatus(card)
      .then((newCard) => {
        if (!card.isLike) card.isLike = newCard._id;
        else delete card.isLike;
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
            data={resList}
            infoMessage={infoMessage}
            handleLikeClick={handleLikeClick}
          />
        )}

        {isVisibBtn ? (
          <button className="movies__more button-hover" type="button">
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
