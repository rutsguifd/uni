import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Header.scss";
import MyInput from "./UI/MyInput/MyInput";
import MyButton from "./UI/MyButton/MyButton";
import { context } from "..";

const Header = () => {
  const user = true;
  const {auth} = useContext(context);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const onChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    navigate(`/films?query=${searchQuery}&page=1`);
    setSearchQuery("");
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
      {user ?
        <MyButton>logout</MyButton>
        :
        <button>login</button>
      }
    </div>
  );
};

export default Header;
