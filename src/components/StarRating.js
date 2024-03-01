import React, { useState, useEffect } from "react";

const StarRating = ({ initialRating, onRatingChange }) => {
  const [clickedStars, setClickedStars] = useState([]);
  const [ratings, setRatings] = useState([]);
  const [averageRating, setAverageRating] = useState(initialRating);

  useEffect(() => {
    const calculateAverageRating = () => {
      const sum = ratings.reduce((acc, curr) => acc + curr, 0);
      const average = sum / ratings.length;
      setAverageRating(average || 0); // Use a default value of 0 if the array is empty
    };

    calculateAverageRating();
  }, [ratings]);

  const handleStarClick = (value) => {
    setClickedStars([...clickedStars, value]);
  };

  const handleSubmitRating = (e) => {
    e.preventDefault();
    if (typeof onRatingChange === "function") {
      setRatings([...ratings, clickedStars.length]);
      onRatingChange(averageRating);
      setClickedStars([]); //this resets clicked stars
    }
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map((value) => (
        <span
          key={value}
          onClick={() => handleStarClick(value)}
          style={{
            cursor: "pointer",
            fontSize: "24px",
            color: clickedStars.includes(value) ? "gold" : "lightgray",
          }}
        >
          ★
        </span>
      ))}

      <button className="btn btn-primary" onClick={handleSubmitRating}>
        Submit Rating
      </button>
      <br />
      <p>Average Rating : {averageRating.toFixed(1)}</p>
    </div>
  );
};

export default StarRating;
