import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  useParams } from 'react-router-dom';
import Header from '../components/Header'
import { fetchMovie } from '../store/actions/movieActions';

const FilmPage = () => {
  const params = useParams();
  const id = params.id;
  const movie = useSelector((state)=> state.fetchMovieReducer.movie.data);
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(fetchMovie(id))
  }, [])
  if (!movie) return null;
  return (
    <>
    <Header />
    <div>
      <img src={movie.Poster} alt="Poster"></img>
    </div>
    <div>{movie.Title}</div>
    </>
  )
}

export default FilmPage