import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "../utils/httpClient";
import DetailStyle from "../styles/MovieDetails.module.css";

export const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
      get("/movie/" + movieId).then(data => {
        setMovie(data)
      })
    }, [movieId])

    if (!movie) {
        return null;
    }

    const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
    return ( 
        <div className={DetailStyle.detailsContainer}>
        <img
          className={`${DetailStyle.col} ${DetailStyle.movieImage}`}
          src={imageUrl}
          alt={movie.title}
        />
        <div className={`${DetailStyle.col} ${DetailStyle.movieDetails}`}>
          <p className={DetailStyle.firstItem}>
            <strong>Title:</strong> {movie.title}
          </p>
          <p>
            <strong>Genres:</strong>{" "}
            {movie.genres.map((genre) => genre.name).join(", ")}
          </p>
          <p>
            <strong>Description:</strong> {movie.overview}
          </p>
        </div>
      </div>
    )
}