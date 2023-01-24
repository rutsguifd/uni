import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "../styles/Header.scss"
import MyInput from "./UI/MyInput/MyInput";

function fetchSearchMovie(searchQuery) {
  return axios.get(`http://www.omdbapi.com/?apikey=c4183736&s=${searchQuery}`)
}

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const fetchData = (e) => {
      e.preventDefault()
      fetchSearchMovie(searchQuery)
      .then((data)=>dispatch({type: "FETCH_SEARCH_MOVIE", payload: data}))
      setSearchQuery("")
  }
  //const a = useSelector((state)=>state.fetchDataReducer.movies)
  return (
    <div className="header">
      <form>
        <MyInput
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={fetchData}>find</button>
      </form>
    </div>
  );
};

export default Header;
