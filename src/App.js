import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import MovieDetails from "./components/MovieDetails";
import AddMovie from "./components/AddMovie";
import NavBarComponent from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";

import AboutPage from "./components/About";

/**
 * 
 *Using an online API of your choice, create a React project. You will be working on this for the next three weeks.
Project must meet the following criteria:
Use React Router and have at least 3 pages using React Bootstrap or an alternative styling library
Contain at least 10 components
Allow for all CRUD operations
 */

function App() {
  const movie = {
    id: "id",
    title: "",
    date: "releaseYear",
    image: "icon",
    description: "movie",
    reviews: [],
    ratings: Number
  };

  return (
    //router methods
    //navbar will be outside of switch
    <Router>
      <NavBarComponent />

      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="/movie/:id" element={<MovieDetails movie={movie} />} />

        <Route path="/AddMovie" element={<AddMovie />} />

        <Route path="/AboutPage" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
