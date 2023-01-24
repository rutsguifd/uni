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

   const onChange = (e) => {
      setSearchQuery(e.target.value);
      debouncedSearch(e.target.value);
   }
  return (
    <div className="header">
      <form onSubmit={(e)=>{navigate(`/films?query=${searchQuery}`); e.preventDefault()}}>
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
