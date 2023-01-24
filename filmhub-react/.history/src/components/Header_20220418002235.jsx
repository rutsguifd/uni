import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useDebounce from "../hooks/useDebounce";
import "../styles/Header.scss";
import MyInput from "./UI/MyInput/MyInput";

const Header = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  // const debouncedSearch = useDebounce(
  //   (query) => navigate(`/films?query=${query}`),
  //   500
  // );

  const onChange = (e) => {
    setSearchQuery(e.target.value);
    // debouncedSearch(searchQuery);
  };
  const onSubmit = (e) => {
    navigate(`/films?query=${searchQuery}`);
    e.preventDefault();
  };
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
