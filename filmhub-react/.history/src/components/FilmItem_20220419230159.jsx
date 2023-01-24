import React from "react";
import { Link } from "react-router-dom";
import "../styles/FilmItem.scss";

const FilmItem = (props) => {
  return (
    <Link to={`/${props.film.imdbID}`} className="filmItem">
      <img src={props.film.Poster} alt={props.film.Title + " Title"}></img>
      <div>
        <h1>{props.film.Title}</h1>
        <h2>{props.film.Type}</h2>
        <h2>{props.film.Year}</h2>
      </div>
    </Link>
  );
};

export default FilmItem;
