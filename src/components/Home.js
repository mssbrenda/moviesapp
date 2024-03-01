import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Service from "../Service";
import Movie from "./Movie";
import StarRating from "./StarRating";
import AverageRating from "./AverageRating";
import { Button } from "react-bootstrap";


/**Using an online API of your choice, create a React project. You will be working on this for the next three weeks.
Project must meet the following criteria:
Use React Router and have at least 3 pages using React Bootstrap or an alternative styling library
Contain at least 10 components
Allow for all CRUD operations */

const Home = () => {
  const navigate = useNavigate();

  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [rating, setRating] = useState(0);
  const [ratings, setRatings] = useState([]);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleRatingSubmit = () => {
    setRatings([...ratings, rating]);
    setRating(0);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const moviesData = await Service.getAllMovies();
      console.log(moviesData);
      setMovies(moviesData);
    } catch (error) {
      setError(error.message || "Failed to fetch Movies");
    }
  };

  const handleDeleteMovie = async (id) => {
    try {
      await Service.deleteMovie(id);
      setMovies(movies.filter((movie) => movie.id !== id));
    } catch (error) {
      setError(error.message || "failed to delete Movie");
    }
  };

  return (
    <div className="movie-grid">
      <h2>Latest Movies</h2>
      {error && <p>{error}</p>}
      <div className="movie-grid-container">
        {movies.map((movie) => (
          <React.Fragment key={movie.id}>
            <div>
              <Link to={`/movie/${movie.id}`} key={movie.id}>
                <Movie
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  date={movie.releaseYear}
                  image={movie.icon}
                  description={movie.description}
                />
              </Link>
              <br />
              <StarRating movie={movie.id}

                handleRatingChange={handleRatingChange}
                initialRating={rating}
                handleRatingSubmit={handleRatingSubmit}
                onRatingChange={handleRatingChange}
              />
              <Button onClick={() => handleDeleteMovie(movie.id)}>
                Delete
              </Button>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Home;
