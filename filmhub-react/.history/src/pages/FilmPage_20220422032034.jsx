import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom';
import Header from '../components/Header'
import { fetchMovieReducer } from '../store/reducers/fetchMovieReducer';

const FilmPage = () => {
  const loc = useLocation();
  console.log(loc);
  const dispatch = useDispatch();
  // useEffect(()=> {
  //   dispatch(fetchMovieReducer(id))
  // }, [])
  return (
    <div>
    <Header />
    kk
    </div>
  )
}

export default FilmPage