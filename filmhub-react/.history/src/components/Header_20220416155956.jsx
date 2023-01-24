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
  const debouncedSearch = useDebounce(fetchData, 500)
  function fetchData () {
    dispatch(fetchMovies(searchQuery))
    //navigate('/films')
  }
  const a = useSelector((state)=>state.fetchDataReducer.movies.data)
  console.log(a);
   const onChange = (e) => {
      setSearchQuery(e.target.value);
      debouncedSearch(searchQuery)
   }
  return (
    <div className="header">
      {/* <form>
        <MyInput
          placeholder="searching for a movie"
          value={searchQuery}
          onChange={debouncedSearch}
        />
        <Link to='/films'>
        find
        </Link>
      </form> */}
      <MyInput
          placeholder="searching for a movie"
          value={searchQuery}
          onChange={onChange}
        />
    </div>
  );
};

export default Header;
