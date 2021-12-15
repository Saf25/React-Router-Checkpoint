import React from "react";
import "../App.css";
import StarRatingComponent from "react-star-rating-component";
import { Link } from "react-router-dom";
export const MovieCard = ({ movie }) => {
  return (
    <article>
      <Link className="MovieCard" to={`/movies/${movie.movieName}`}>
        <img className="style" src={movie.movieImg} alt="none"></img>
        <span>{movie.movieName}</span>
        <div className="starRating">
          <StarRatingComponent
            className="starRatingComp"
            name="movieRating"
            starCount={5}
            value={parseInt(movie.movieRating)}
          />
        </div>
      </Link>
    </article>
  );
};
