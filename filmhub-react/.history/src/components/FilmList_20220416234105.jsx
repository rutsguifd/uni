
import { useSelector } from "react-redux";
import FilmItem from "./FilmItem";
import '../styles/FilmList.scss'
import { useSearchParams } from "react-router-dom";

const FilmList = () => {
  const films = useSelector(
    (state) => state.fetchDataReducer.movies.data
  );
  const [searchParams, setSearchParams] = useSearchParams();
  const qur = searchParams.get('query')
  console.log(qur)
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
