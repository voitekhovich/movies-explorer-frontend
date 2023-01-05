import { useMemo } from "react";

export const useFilteredMovies = (movies, filter) => {
  
  const filteredMovies = useMemo(() => {
    if (filter) return [...movies].filter(item => item.duration <= 40 && item);
    return movies;
  }, [filter, movies]);

  return filteredMovies;
}

export const useMovies = (movies, filter, query) => {

  const filteredMovies = useFilteredMovies(movies, filter);

  const filteredMoviesAndSearch = useMemo(() => {
    return filteredMovies.filter(item => item.nameRU.toLowerCase().includes(query.toLowerCase()));
  }, [query, filteredMovies]);

  return filteredMoviesAndSearch;
}