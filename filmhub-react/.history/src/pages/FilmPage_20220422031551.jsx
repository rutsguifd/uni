import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom';
import Header from '../components/Header'
import { fetchMovieReducer } from '../store/reducers/fetchMovieReducer';

const FilmPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get('/:id'); 
  console.log(id);
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