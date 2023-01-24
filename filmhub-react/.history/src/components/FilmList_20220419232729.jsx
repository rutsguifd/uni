import { useDispatch, useSelector } from "react-redux";
import FilmItem from "./FilmItem";
import "../styles/FilmList.scss";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovies } from "../store/actions/actions";
import { getPageCount, getPagesArray } from "../utils/pages";

const FilmList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const pageCount = getPageCount(
    useSelector((state) => state.fetchDataReducer.movies.data?.totalResults)
  );
  const totalPages = getPagesArray(pageCount);
  const films = useSelector(
    (state) => state.fetchDataReducer.movies.data?.Search
  );
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");
  const page = searchParams.get("page");

  useEffect(() => {
    dispatch(fetchMovies(query, page));
  }, [query, page]);

  const page2 = (p) => {
    setSearchParams({ query: query, page: p });
    //navigate(`/films?query=${query}&page=${page}`)
  };
  console.log("films", films);
  if (!films) return null;
  return (
    <div className="filmList">
      {films.map((film) => (
        <FilmItem film={film} key={film.imdbID} />
      ))}
      <div>
        {totalPages.map((p) => (
          <button onClick={page2(p)} key={p}>
            {p}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilmList;
