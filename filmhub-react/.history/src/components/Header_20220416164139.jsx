import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import useDebounce from "../hooks/useDebounce";
import { fetchMovies } from "../store/actions/actions";
import "../styles/Header.scss"
import MyButton from "./UI/MyButton/MyButton";
import MyInput from "./UI/MyInput/MyInput";


const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearch = useDebounce(fetchData, 500, searchQuery)
  function fetchData () {
    dispatch(fetchMovies(searchQuery))
  }
  const a = useSelector((state)=>state.fetchDataReducer.movies.data)
  console.log(a);
   const onChange = (e) => {
      setSearchQuery(e.target.value);
      debouncedSearch(e.target.value);
   }
  return (
    <div className="header">
      <form onSubmit={(e)=> e.preventDefault()}>
      <MyInput
          placeholder="searching for a movie"
          value={searchQuery}
          onChange={onChange}
        />
        <Link to='/films'>
        find
        </Link>
      </form>
      
    </div>
  );
};

export default Header;
