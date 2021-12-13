import React from "react";
import "../App.css";
import { Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import StarRatingComponent from "react-star-rating-component";
import Navbar from "react-bootstrap/Navbar";
export const Filter = ({ filterInput, StarInput }) => {
  return (
    <div className="NavbarContainer">
      <Navbar bg="dark" variant="gold">
        <Container className="NavbarContainer">
          <Navbar.Brand>
            <input
              className="input"
              type="text"
              placeholder="Search movie..."
              onChange={(e) => filterInput(e.target.value)}
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#features">
              <StarRatingComponent
                className="StarMenu"
                name="rate1"
                starCount={5}
                onStarClick={(rating) => {
                  StarInput(rating);
                }}
              />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
