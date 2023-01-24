import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../styles/Header.css"

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const fetchData = (e) => {
      e.preventDefault()
      dispatch({type: "FETCH_SEARCH_MOVIE", payload: searchQuery})
      console.log()
  }
  const a = useSelector((state)=>state.fetchDataReducer.movies)
  return (
    <div className="header">
      <form>
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={fetchData}>find</button>
      </form>
      <div>
          {a}
      </div>
    </div>
  );
};

export default Header;
