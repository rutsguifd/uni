import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "../styles/Header.scss"

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const fetchData = (e) => {
      e.preventDefault()
      dispatch({type: "FETCH_SEARCH_MOVIE", payload: searchQuery})
      setSearchQuery("")
  }
  //const a = useSelector((state)=>state.fetchDataReducer.movies)
  return (
    <div className="header">
      <form>
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={fetchData}>find</button>
      </form>
    </div>
  );
};

export default Header;
