import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Header.scss";
import MyInput from "./UI/MyInput/MyInput";
import MyButton from "./UI/MyButton/MyButton";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { firebase } from "../firebase/firebase";
import {useAuthState} from 'react-firebase-hooks/auth'

const Header = () => {
  const auth = getAuth(firebase);
  let [user, setUser]= useState(false);
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
  const login = async () => {
    const provider = new GoogleAuthProvider();
    provider.addScope("profile");
    provider.addScope("email");
    setUser(await signInWithPopup(auth, provider));
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
      {user ? (
        <MyButton onClick={() => {console.log("lol"); signOut(auth)}}>logout</MyButton>
      ) : (
        <MyButton onClick={() => login()}>login</MyButton>
      )}
    </div>
  );
};

export default Header;
