import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import StarRating from "./StarRating";


//this component defines Movie

const Movie = ({ id, title, image, description, date, reviews }) => {
  return (
    <Card
      style={{
        width: "18rem ",
        margin: "5px",
        padding: "5px",
      }}
    >
      <Col xs={6} md={4}>
        <Image
          src={image}
          thumbnail
          style={{ width: "100%", height: "auto" }}
        />
      </Col>
      <Card.Body>
        <Card.Img />
        <Card.Title>{title}</Card.Title>
        <br />
        <Card.Text>
          Release Date: {date}
          Summary: {description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Movie;
