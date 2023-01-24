import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Header.scss";
import MyInput from "./UI/MyInput/MyInput";

const Header = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const onChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    navigate(`/films?query=${searchQuery}`);
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
