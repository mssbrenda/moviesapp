import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { CardBody } from "react-bootstrap";
import Service from "../Service";
import ReviewForm from "./ReviewForm";
import { useParams } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";



const MovieReviews = ({ movie }) => {
const [reviews, setReviews] = useState([]);
const [error, setError] = useState(null);


useEffect(() => {
  fetchReviews();
}, []);

const fetchReviews = async () => {
  if(!movie || !movie.id) return;
  try{
    console.log('fetching reviews..');
    const reviewsData = await Service.getReviewsByMovieId(movie.id);
    console.log(reviewsData);
    const reviewsArray = Object.entries(reviewsData).map(([id, body])=> ({
      id, 
      body,
    }));
    setReviews(reviewsArray);
  }catch (error) {
    setError(error.message || 'failed to fetch reviews');
  }
};


  return (
    <ErrorBoundary>
      <div>
        {reviews &&
          reviews.map((review) => (
            <Card key={review.id}>
              <CardBody>{review.body}</CardBody>
            </Card>
          ))}
      </div>
    </ErrorBoundary>
  );
};

export default MovieReviews;
