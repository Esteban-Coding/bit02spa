import CardStyle from "../styles/MovieCard.module.css"

export function MovieCard({ movie }) {
  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
    <li className={CardStyle.movieCard}>
      <img className={CardStyle.movieImage} src={imageUrl} alt={movie.title} width={230} height={345}></img>
      <div>{movie.title}</div>
    </li>
  )
}
