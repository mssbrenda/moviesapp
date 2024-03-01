import React from "react";

const AverageRating = ({ ratings }) => {
  const AverageRating =
    ratings.reduce((acc, curr) => acc + curr, 0) / ratings.length;

  return (
    <div className="average-rating">
      <p>
        Average Rating:{" "}
        {isNaN(AverageRating) ? "N/A" : AverageRating.toFixed(1)}
      </p>
    </div>
  );
};
export default AverageRating;
