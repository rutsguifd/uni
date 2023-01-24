import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Header.scss";
import MyInput from "./UI/MyInput/MyInput";
import MyButton from "./UI/MyButton/MyButton";
import {Context} from '../index'
import { getAuth, signInWithPopup } from "firebase/auth";

const Header = () => {
  const user = false;
  const {firebase} = useContext(Context);
  const auth = getAuth(firebase);
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
  const login = async ()=> {
    const user = await signInWithPopup(auth);
    console.log(user);
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
        <MyButton onClick={()=>login()}>login</MyButton>
      }
    </div>
  );
};

export default Header;
