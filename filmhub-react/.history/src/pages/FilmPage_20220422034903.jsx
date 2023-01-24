import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { fetchMovie } from "../store/actions/movieActions";
import "../styles/FilmPage.scss";

const FilmPage = () => {
  const params = useParams();
  const id = params.id;
  const movie = useSelector((state) => state.fetchMovieReducer.movie.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovie(id));
  }, []);
  if (!movie) return null;
  return (
    <>
      <Header />
      <div className="filmPage">
        <div>
          <img src={movie.Poster} alt="Poster"></img>
        </div>
        <div className="filmInfo">
          <h2>Title: {movie.Title}</h2>
          <h3>Rating: {movie.imdbRating} ( of {movie.imdbVotes} votes )</h3>
          <h3>Released: {movie.Released}</h3>
          <h3>Country: {movie.Country}</h3>
          <h3>Writer: {movie.Writer}</h3>
        </div>
      </div>
    </>
  );
};

export default FilmPage;
