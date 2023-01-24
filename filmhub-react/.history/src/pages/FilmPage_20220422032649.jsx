import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {  useParams } from 'react-router-dom';
import Header from '../components/Header'
import { fetchMovieReducer } from '../store/reducers/fetchMovieReducer';

const FilmPage = () => {
  const params = useParams();
  const id = params.id;
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(fetchMovieReducer(id))
  }, [])
  return (
    <div>
    <Header />
    kk
    </div>
  )
}

export default FilmPage