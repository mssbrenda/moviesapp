import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Service from "../Service";

const AddMovie = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault(); //prevent the default form submission behavior
    try {
      const movieData = {
        title: title,
        description: description,
        date: date,
        image: image,
        reviews: [],
        ratings: Number
      };
      await Service.createMovie(movieData);
      //clear out the form fields after movie submition
      setTitle("");
      setDescription("");
      setDate("");
      setImage("");
    } catch (error) {
      console.error("error creating movie:", error);
      //handle error
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="Form">
      <Form.Group as={Row} className="'mb-3" controlId="title">
        <Form.Label column sm={2}>
          Tittle
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="text "
            placeholder="Enter movie Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Col>
      </Form.Group>
      <Form.Group className="mb-3" controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter movie description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="'mb-3" controlId="releaseYear">
        <Form.Label>Release Date</Form.Label>
        <Form.Control
          type=" date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="'mb-3" controlId="icon">
        <Form.Label>Icon</Form.Label>
        <Form.Control
          type="img "
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Img SRC"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default AddMovie;
