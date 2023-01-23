import "./SavedMovies.css";

import React, { useState } from "react";
import MoviesCardList from "../../MoviesCardList/MoviesCardList";
import { mainApi } from "../../../utils/MainApi";
import SearchForm from "../../SearchForm/SearchForm";
import Preloader from "../../Preloader/Preloader";
import { useMovies } from "../../../hooks/useMovies";

function SavedMovies() {
  const [savedMovies, setSavedMovies] = useState([]);
  const [filter, setFilter] = useState({ query: "", checkBox: false });
  const [isLoading, setIsLoading] = useState(false);
  

  const filteredAndSearchedMovies = useMovies(savedMovies, filter.checkBox, filter.query);

  const searchHandle = (query) => {
    setFilter((filter) => ({...filter, query }));
  };

  const handleLikeClick = (card) => {
    mainApi
      .delLikes(card._id)
      .then((result) => {
        setSavedMovies((state) => state.filter((c) => c._id !== card._id));

        const movList = (JSON.parse(localStorage.getItem("movList")) || []); 
        movList.map((item) => {
            if (item.id === card.movieId) delete item.isLike
            return item;
          });   
        localStorage.setItem("movList", JSON.stringify(movList));
      })
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    setIsLoading(true);
    mainApi
      .getInitialCards()
      .then((movies) => {
        setSavedMovies(movies);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <main className="main">
      <SearchForm
        filter={filter}
        setFilter={setFilter}
        submitClick={searchHandle}
      />
      <section className="saved-movies">
        {isLoading ? <Preloader /> : <MoviesCardList data={filteredAndSearchedMovies} handleLikeClick={handleLikeClick} />}
      </section>
    </main>
  );
}

export default SavedMovies;
