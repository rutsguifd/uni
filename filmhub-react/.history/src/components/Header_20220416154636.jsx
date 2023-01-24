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
  const fetchData = (e) => {
    e.preventDefault()
    dispatch(fetchMovies(searchQuery))
    setSearchQuery("")
    //navigate('/films')
  }
  const debouncedSearch = useDebounce(fetchData, 500)
  const a = useSelector((state)=>state.fetchDataReducer.movies.data)
  console.log(a);
  return (
    <div className="header">
      <form>
        <MyInput
          placeholder="searching for a movie"
          value={searchQuery}
          onChange={debouncedSearch}
        />
        <Link to='/films'>
        find
        </Link>
      </form>
    </div>
  );
};

export default Header;
