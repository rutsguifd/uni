
import { useDispatch, useSelector } from "react-redux";
import FilmItem from "./FilmItem";
import '../styles/FilmList.scss'
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovies } from "../store/actions/actions";

const FilmList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const films = useSelector(
    (state) => state.fetchDataReducer.movies.data.Search
    );
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query')
  const page = searchParams.get('page');
  
  useEffect(()=>{
      dispatch(fetchMovies(query, page))
    }, [query, page]);
  
    const page2 = () => {
      setSearchParams({query: query, page: '2'});
      //navigate(`/films?query=${query}&page=${page}`)
  }
  //console.log("films", films.data)
  if (!films) return null;
  return (
    <div className="filmList">
      {films.map((film) => (
        <FilmItem film={film} key={film.imdbID} />
      ))}
    <button onClick={page2}>2</button>
    </div>
  );
};

export default FilmList;
