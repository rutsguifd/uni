
import { useDispatch, useSelector } from "react-redux";
import FilmItem from "./FilmItem";
import '../styles/FilmList.scss'
import { useSearchParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { fetchMovies } from "../store/actions/actions";

const FilmList = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const films = useSelector(
    (state) => state.fetchDataReducer.movies
  );
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query')
  useEffect(()=>{
      dispatch(fetchMovies(query, page))
  
  }, [query, page]);

  console.log("films", films.data)
  if (!films.data) return null;
  return (
    <div className="filmList">
      {films.data.map((film) => (
        <FilmItem film={film} key={film.imdbID} />
      ))}
    </div>
  );
};

export default FilmList;
