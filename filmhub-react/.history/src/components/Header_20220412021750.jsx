import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "../styles/Header.css"

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const fetchData = (e) => {
      e.preventDefault()
      const response = dispatch({type: "FETCH_SEARCH_MOVIE", payload: searchQuery})
      console.log(response)
  }
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
