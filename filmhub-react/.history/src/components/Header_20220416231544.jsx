import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useDebounce from "../hooks/useDebounce";
import { fetchMovies } from "../store/actions/actions";
import "../styles/Header.scss"
import MyInput from "./UI/MyInput/MyInput";


const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearch = useDebounce((query)=>navigate(`/films?query=${query}`), 500)
  function fetchData (query) {
    dispatch(fetchMovies(query))
  }

  const a = useSelector((state)=>state.fetchDataReducer.movies.data)
  console.log(a);
   const onChange = (e) => {
      setSearchQuery(e.target.value);
      debouncedSearch(e.target.value);
   }
  return (
    <div className="header">
      <form onSubmit={()=>navigate(`/films?query=${searchQuery}`)}>
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
