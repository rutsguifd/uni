import React from "react";
import { useSelector } from "react-redux";
import FilmItem from "./FilmItem";

const FilmList = () => {
  const films = useSelector((state) => state.fetchDataReducer.movies.data);
  return (
    <div>
      {films.map((film) => {
        <FilmItem props={film} key={film.id} />;
      })}
    </div>
  );
};

export default FilmList;
