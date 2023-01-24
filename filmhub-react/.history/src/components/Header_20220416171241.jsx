import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import useDebounce from "../hooks/useDebounce";
import { fetchMovies } from "../store/actions/actions";
import "../styles/Header.scss"
import MyButton from "./UI/MyButton/MyButton";
import MyInput from "./UI/MyInput/MyInput";


const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearch = useDebounce(fetchData, 1)
  function fetchData (query) {
    dispatch(fetchMovies(query))
  }
  const onSubmit = (e)=> {
    e.preventDefault();
    navigate('/films');
  }
  const a = useSelector((state)=>state.fetchDataReducer.movies.data)
  console.log(a);
   const onChange = (e) => {
      setSearchQuery(e.target.value);
      debouncedSearch(e.target.value);
   }
  return (
    <div className="header">
      <form onSubmit={onSubmit}>
      <MyInput
          placeholder="searching for a movie"
          value={searchQuery}
          onChange={onChange}
        />
      </form>
      
    </div>
  );
};

export default Header;
