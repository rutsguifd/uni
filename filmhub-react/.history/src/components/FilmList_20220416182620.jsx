import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FilmItem from "./FilmItem";
import classes from '../styles/FilmList.scss'

const FilmList = () => {
  const [films, setFilms] = useState([]);
  const filmsFromSelector = useSelector(
    (state) => state.fetchDataReducer.movies.data
  );
  useEffect(() => {
    setFilms(filmsFromSelector);
  }, []);
  return (
    <div >
      {films.map((film) => (
        <FilmItem film={film} key={film.id} />
      ))}
    </div>
  );
};

export default FilmList;
