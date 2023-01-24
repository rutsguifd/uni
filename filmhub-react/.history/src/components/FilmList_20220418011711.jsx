
import { useDispatch, useSelector } from "react-redux";
import FilmItem from "./FilmItem";
import '../styles/FilmList.scss'
import { useSearchParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { fetchMovies } from "../store/actions/actions";

const FilmList = () => {
  const lastElement = useRef();
  const observer = useRef();
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

  useEffect(()=>{
    if(films.loading) return;
    if(observer.current) observer.current.disconnect();
    const callback = function(entries, observer) {
        if(entries[0].isIntersecting) {
          setPage(page+1)
        }
      console.log("xd")
    };
    observer.current = new IntersectionObserver(callback);
    observer.current.observe(lastElement.current)
  }, [films.loading])
  console.log("films", films.data)
  if (!films.data) return null;
  return (
    <div className="filmList">
      {films.data.map((film) => (
        <FilmItem film={film} key={film.imdbID} />
      ))}
      <div ref={lastElement}>xd</div>
    </div>
  );
};

export default FilmList;
