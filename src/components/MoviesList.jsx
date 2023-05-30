import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import { MovieCard } from "./MovieCard"
import MoviesStyle from "../styles/MoviesList.module.css"

export function MoviesList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    get("/discover/movie")
      .then(data => {
        setMovies(data.results);
    });
  }, []);

  return (
    <ul className={MoviesStyle.moviesList}>
      {movies.map((movie) => {
        return <MovieCard key={movie.id} movie={ movie }/>
      })}
    </ul>
  )
}
