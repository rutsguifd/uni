import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { fetchMovies } from "../store/actions/actions";
import "../styles/Header.scss"
import MyButton from "./UI/MyButton/MyButton";
import MyInput from "./UI/MyInput/MyInput";


const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const fetchData = (e) => {
    setTimeout(()=>{
      e.preventDefault()
      dispatch(fetchMovies(searchQuery))
      setSearchQuery("")
    }, 1000)
      
      navigate('/films')
  }
  const a = useSelector((state)=>state.fetchDataReducer.movies.data)
  console.log(a);
  return (
    <div className="header">
      <form onSubmit={fetchData}>
        <MyInput
          placeholder="searching for a movie"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
          <button type="submit">find</button>
        <Link to='/films'>
        find
        </Link>
      </form>
    </div>
  );
};

export default Header;
