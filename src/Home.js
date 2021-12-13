import "./App.css";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import { MovieList } from "./Component/MovieList";
import { AddMovie } from "./Component/AddMovie";
import { useState } from "react";
import { Filter } from "./Component/Filter";
import "bootstrap/dist/css/bootstrap.min.css";
const movies = [
  {
    id: uuidv4(),
    movieName: "Gone Girl",
    movieImg: "https://wallpapercave.com/wp/wp3623264.jpg",
    movieRating: 5,
    trailer: "https://www.youtube.com/watch?v=ItEpaXZ6R_M",
    description:
      "With his wife's disappearance having become the focus of an intense media circus, a man sees the spotlight turned on him when it's suspected that he may not be innocent. On the occasion of his fifth wedding anniversary, Nick Dunne reports that his wife, Amy, has gone missing.",
  },
  {
    id: uuidv4(),
    movieName: "The invisible Guest",
    movieImg:
      "https://m.media-amazon.com/images/M/MV5BMDk0YzAwYjktMWFiZi00Y2FmLWJmMmMtMzUyZDZmMmU5MjkzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    movieRating: 4,
    trailer: "https://www.youtube.com/watch?v=5hnO461B0Ms",
    description:
      "A successful entrepreneur accused of murder and a witness preparation expert have less than three hours to come up with an impregnable defense. ... However, his perfect life will crumble like a pack of cards when Doria finds himself locked up in a hotel room next to a dead body, standing accused of first-degree murder.",
  },
  {
    id: uuidv4(),
    movieName: "The Revenant",
    movieImg:
      "https://m.media-amazon.com/images/M/MV5BMDE5OWMzM2QtOTU2ZS00NzAyLWI2MDEtOTRlYjIxZGM0OWRjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
    movieRating: 4,
    trailer: "https://www.youtube.com/watch?v=LoebZZ8K5N0",
    description:
      "The Revenant (2015), based on a true story, chronicles the travails of Hugh Glass, a fur trapper (Leonardo DiCaprio) whose companions murder his son and leave him for dead following an attack by a bear.",
  },
  {
    id: uuidv4(),
    movieName: "Green Book",
    movieImg:
      "http://img.over-blog-kiwi.com/0/53/58/53/20200106/ob_9900de_91pwxip8fol-ac-sl1500.jpg",
    movieRating: 4,
    trailer: "https://www.youtube.com/watch?v=QkZxoko_HC0",
    description:
      "Green Book is about the relationship between two real-life people: Donald Shirley and Tony “Lip” Vallelonga. ... As an adult he worked as a bouncer, a maître d' and and a chauffeur, and he was hired in 1962 to drive Shirley on a concert tour through the Jim Crow South.",
  },
];

export default function Home() {
  const [movieList, setMovieList] = useState(movies);
  const [searchInput, setsearchInput] = useState("");
  const [star, setStar] = useState(0);

  const getData = (info) => {
    setMovieList([...movieList, info]);
  };
  const filterInput = (info) => {
    setsearchInput(info);
  };
  const StarInput = (info) => {
    setStar(info);
  };
  return (
    <div>
      <Filter filterInput={filterInput} StarInput={StarInput} />
      <MovieList
        movies={movieList.filter(
          (movie) =>
            movie.movieName
              .toLowerCase()
              .includes(searchInput.trim().toLowerCase()) &&
            movie.movieRating >= star
        )}
      />
      <AddMovie getData={getData} />
    </div>
  );
}
export function getMovies() {
  return movies;
}
export function getMovie(movieName) {
  return movies.find((el) => el.movieName === movieName);
}
