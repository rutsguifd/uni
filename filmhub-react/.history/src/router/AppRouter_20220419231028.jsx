import React from "react";
import { Route, Routes } from "react-router-dom";
import FilmPage from "../pages/FilmPage";
import Films from "../pages/Films";
import HomePage from "../pages/HomePage";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/films" element={<Films />} />
        <Route path="/films/:id" element={<FilmPage />} />
      </Routes>
    </>
  );
};

export default AppRouter;
