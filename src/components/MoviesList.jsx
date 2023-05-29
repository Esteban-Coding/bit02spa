import { MovieCard } from "./MovieCard"
import movies from "./movies.json"
import MoviesStyle from "../styles/MoviesList.module.css"

export function MoviesList() {
  return (
    <ul className={MoviesStyle.moviesList}>
      {movies.map((movie) => {
        return <MovieCard key={movie.id} movie={ movie }/>
      })}
    </ul>
  )
}
