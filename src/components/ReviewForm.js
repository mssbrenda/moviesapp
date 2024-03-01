import React, { useState } from "react";
import Service from "../Service";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import MovieReviews from "./MovieReviews";

const ReviewForm = () => {
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState([]);
  const { id } = useParams(); //get id from url path

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!review) {
      console.log("Review data is empty");
      return;
    }
    try {
      console.log("submitting review with movieId:", id);

      const reviewData = {
        id: {id}.id,
        review: review,
      };

      console.log("review content:", reviewData);
      reviews.push(reviewData);
      await Service.createReview(id, reviewData);
      setReview("");
    } catch (error) {
      console.log("Error submitting review: ", error);
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="review">
          <Form.Label>Leave a review</Form.Label>
          <Form.Control
            type="text"
            as="textarea"
            rows={3}
            cols={100}
            value={review}
            onChange={handleReviewChange}
            placeholder="...."
          />
          <Button type="submit">Submit Review</Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default ReviewForm;
