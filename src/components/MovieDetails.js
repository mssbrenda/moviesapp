import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Service from "../Service";
import Movie from "./Movie";
import ReviewForm from "./ReviewForm";
import MovieReviews from "./MovieReviews";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const movieData = await Service.getMovieById(id);
        setMovie(movieData);
        setLoading(false); //after data is fetched
      } catch (error) {
        setError("Failed to fetch movie");
        console.error("Error fetching movie:", error);
      }
    };
    fetchMovie();
  }, []);

  return (
    <div>
      {movie && (
        <Movie
          key={movie.id}
          title={movie.title}
          date={movie.releaseYear}
          image={movie.icon}
          description={movie.description}
        />
      )}
      {error && <p>{error}</p>}

      {movie && movie.id && <ReviewForm movie={movie} />}
      <MovieReviews movie={movie} />
    </div>
  );
};

export default MovieDetails;
