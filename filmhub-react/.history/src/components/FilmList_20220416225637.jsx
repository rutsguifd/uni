import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FilmItem from "./FilmItem";
import '../styles/FilmList.scss'

const FilmList = () => {
  const films = useSelector(
    (state) => state.fetchDataReducer.movies.data
  );
  return (
    <div className="filmList">
      {films.map((film) => (
        <FilmItem film={film} key={film.id} />
      ))}
    </div>
  );
};

export default FilmList;
