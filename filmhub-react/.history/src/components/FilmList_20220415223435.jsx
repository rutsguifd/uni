import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FilmItem from "./FilmItem";

const FilmList = () => {
  const [films, setFilms] = useState({});
  const filmsFromSelector = useSelector(
    (state) => state.fetchDataReducer.movies
  );
  useEffect(() => {
    setFilms(filmsFromSelector);
  }, []);
  setFilms(useSelector((state) => state.fetchDataReducer.movies.data));
  return (
    <div>
      {films.map((film) => (
        <FilmItem film={film} key={film.id} />
      ))}
    </div>
  );
};

export default FilmList;
