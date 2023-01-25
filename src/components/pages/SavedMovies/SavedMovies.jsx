import "./SavedMovies.css";

import React, { useState } from "react";
import MoviesCardList from "../../MoviesCardList/MoviesCardList";
import { api } from "../../../utils/Api";
import SearchForm from "../../SearchForm/SearchForm";
import Preloader from "../../Preloader/Preloader";
import { useMovies } from "../../../hooks/useMovies";

function SavedMovies() {
  const [savedMovies, setSavedMovies] = useState([]);
  // const [resList, setResList] = useState([]);
  const [filter, setFilter] = useState({ shortFilms: false, searchQuery: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState([]);
  

  const filteredAndSearchedMovies = useMovies(
    savedMovies,
    filter.shortFilms,
    filter.searchQuery
  );

  const searchHandle = (searchQuery) => {
    setFilter({ ...filter, searchQuery: searchQuery });
  };

  const handleLikeClick = (card) => {
    api
      .delLikes(card._id)
      .then((result) => {
        setSavedMovies((state) => state.filter((c) => c._id !== card._id));      
        // localStorage.setItem("resList", JSON.stringify(result));
      })
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    setResult(filteredAndSearchedMovies);
  }, [filter]);

  React.useEffect(() => {
    setIsLoading(true);
    // setResList(JSON.parse(localStorage.getItem("resList")) || []);
    api
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
        {isLoading ? <Preloader /> : <MoviesCardList data={savedMovies} handleLikeClick={handleLikeClick} />}
      </section>
    </main>
  );
}

export default SavedMovies;
