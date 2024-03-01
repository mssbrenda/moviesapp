import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavBar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

function NavBarComponent() {
  const handleAddMovieSelect = () => {
    //navigate to the add Movie Page
    window.location.href = "/AddMovie";
  };
  const handleAboutSelect = () => {
    //navigate to the bout page

    window.location.href = "/AboutPage";
  };

  return (
    <>
      <NavBar bg="dark" data-bs-theme="dark" expand="lg">
        <Container>
          <Nav className="mr-auto">
            <NavLink
              to="/"
              className="nav-link"
              activeclassname="active"
              as={Nav.Link}
              onSelect={() => console.log("Home Selected")}
            >
              Home
            </NavLink>
          </Nav>
          <br />
          <Nav className="'mr-auto">
            <NavLink
              to="/AddMovie"
              className="nav-link"
              activeclassname="active"
              as={NavLink}
              onClick={handleAddMovieSelect}
            >
              Add Movie
            </NavLink>
          </Nav>
          <br />
          <Nav className="mr-auto">
            <NavLink
              to="/AboutPage"
              className="nav-link"
              activeclassname="active"
              as={NavLink}
            >
              About
            </NavLink>
          </Nav>
        </Container>
      </NavBar>
    </>
  );
}

export default NavBarComponent;
