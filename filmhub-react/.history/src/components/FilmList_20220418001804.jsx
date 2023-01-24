
import { useDispatch, useSelector } from "react-redux";
import FilmItem from "./FilmItem";
import '../styles/FilmList.scss'
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchMovies } from "../store/actions/actions";

const FilmList = () => {
  const dispatch = useDispatch();
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
        <FilmItem film={film} key={film.id} />
      ))}
    </div>
  );
};

export default FilmList;
