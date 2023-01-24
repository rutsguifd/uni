import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../store/actions";
import "../styles/Header.scss"
import MyButton from "./UI/MyButton/MyButton";
import MyInput from "./UI/MyInput/MyInput";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const fetchData = (e) => {
      e.preventDefault()
      fetchMovies(searchQuery)
  }
  const a = useSelector((state)=>state.fetchDataReducer.movies)
  console.log(a);
  return (
    <div className="header">
      <form>
        <MyInput
          placeholder="searching for a movie"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <MyButton onClick={fetchData}>find</MyButton>
      </form>
    </div>
  );
};

export default Header;
