import { useDispatch, useSelector } from "react-redux";
import FilmItem from "./FilmItem";
import "../styles/FilmList.scss";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovies } from "../store/actions/actions";
import { getPageCount, getPagesArray } from "../utils/pages";

const FilmList = () => {
  const dispatch = useDispatch();
  const totalResults = useSelector((state) => state.fetchDataReducer.movies.data?.totalResults);
  const pageCount = Math.ceil(parseInt(totalResults ?? 10)/10);
  const totalPages = getPagesArray(pageCount);
  const films = useSelector(
    (state) => state.fetchDataReducer.movies.data?.Search
  );
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");
  const page = searchParams.get("page");

  useEffect(() => {
    dispatch(fetchMovies(query, page));
  }, [dispatch, query, page]);

  const page2 = (p) => {
    setSearchParams({ query: query, page: p });
  };
  console.log("films", films);
  if (!films) return null;
  return (
    <div className="filmList">
      {films.map((film) => (
        <FilmItem film={film} key={film.imdbID} />
      ))}
      <div>
        {totalPages ? (
          totalPages.map((p) => (
            <button onClick={page2(p)} key={p}>
              {p}
            </button>
          ))
        ) : (
          <div>wait</div>
        )}
      </div>
    </div>
  );
};

export default FilmList;
