import React from "react";
import { Button, Navbar, Container } from "react-bootstrap";
import ReactPlayer from "react-player";
import { useParams } from "react-router";
import { getMovie } from "../Home";
import { AddMovie } from "./AddMovie";

export default function Description() {
  let params = useParams();

  let movie = getMovie(params.movieName);

  return (
    <div>
      <article>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="blue">
          <Container>
            <Button variant="danger" href="../">
              Back To Home Page
            </Button>
            <h3 className="gold">{movie.movieName}</h3>
          </Container>
        </Navbar>
        <p className="p">
          {" "}
          <span className="span">Movie description:</span> {movie.description}
        </p>
        <ReactPlayer
          url={movie.trailer}
          width="100%"
          height="811px"
          playing="true"
        />
      </article>
    </div>
  );
}
