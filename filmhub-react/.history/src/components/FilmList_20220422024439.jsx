import { useDispatch, useSelector } from "react-redux";
import FilmItem from "./FilmItem";
import "../styles/FilmList.scss";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchMovies } from "../store/actions/actions";
import Pagination from "./Pagination";

const FilmList = () => {
  const dispatch = useDispatch();
  const totalResults = useSelector((state) => state.fetchDataReducer.movies.data?.totalResults);
  const totalPages = Math.ceil(parseInt(totalResults ?? 10)/10);
  const films = useSelector(
    (state) => state.fetchDataReducer.movies.data?.Search
  );
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");
  const page = searchParams.get("page");

  useEffect(() => {
    dispatch(fetchMovies(query, page));
  }, [dispatch, query, page]);

  const changePage = (p) => {
    setSearchParams({ query: query, page: p });
  };
  if (!films) return null;
  return (
    <>
    <div className="filmList">
      {films.map((film) => (
        <FilmItem film={film} key={film.imdbID} />
      ))}
    </div>
    <Pagination changePage={changePage} currentPage={Number(page)} totalPages={totalPages}/>
      </>
  );
};

export default FilmList;
