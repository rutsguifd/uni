
import { useSelector } from "react-redux";
import FilmItem from "./FilmItem";
import '../styles/FilmList.scss'

const FilmList = () => {
  const films = useSelector(
    (state) => state.fetchDataReducer.movies.data
  );
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
