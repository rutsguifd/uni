import React from 'react'
import classes from '../styles/FilmItem.scss'

const FilmItem = (props) => {
  return (
    <div className={classes.filmItem}>
        <img src={props.Poster} alt={props.film.Title + " Title"}></img>
        <h1>{props.film.Title}</h1>
        <h2>{props.film.Type}</h2>
        <h2>{props.film.Year}</h2>
    </div>
  )
}

export default FilmItem