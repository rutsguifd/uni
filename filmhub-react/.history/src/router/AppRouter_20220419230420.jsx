import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import FilmPage from "../pages/FilmPage";
import Films from "../pages/Films";
import HomePage from "../pages/HomePage";

const AppRouter = () => {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/films" element={<Films />} >
        <Route path=":id" element={<FilmPage />}/>  
      </Route>
    </Routes>
    </>
  );
};

export default AppRouter;
