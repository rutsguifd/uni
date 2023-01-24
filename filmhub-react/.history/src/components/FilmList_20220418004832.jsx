
import { useDispatch, useSelector } from "react-redux";
import FilmItem from "./FilmItem";
import '../styles/FilmList.scss'
import { useSearchParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { fetchMovies } from "../store/actions/actions";

const FilmList = () => {
  const lastElement = useRef();
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const changePage = (p) => {
    setPage(page+p);
  }
  const films = useSelector(
    (state) => state.fetchDataReducer.movies.data
  );
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query')
  useEffect(()=>{
      dispatch(fetchMovies(query))
  
  }, [query])
  console.log("films", films)
  if (!films) return null;
  return (
    <div className="filmList">
      {films.map((film) => (
        <FilmItem film={film} key={film.imdbID} />
      ))}
      <div ref={lastElement}></div>
    </div>
  );
};

export default FilmList;
