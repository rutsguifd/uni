import React from 'react'

const FilmItem = (props) => {
  return (
    <div>
        <img src={props.Poster} alt={props.film.Title + " Title"}>
        <h1>{props.film.Title}</h1>
        <h2>{props.film.Type}</h2>
        <h2>{props.film.Year}</h2>
    </div>
  )
}

export default FilmItem