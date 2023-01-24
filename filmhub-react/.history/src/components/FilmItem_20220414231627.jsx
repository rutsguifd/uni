import React from 'react'

const FilmItem = (props) => {
  return (
    <div>
        <img src={props.Poster} alt={props.Title + "Title"}/>
        <h1>{props.Title}</h1>
        <h2>{props.Type}</h2>
        <h2>{props.Year}</h2>
    </div>
  )
}

export default FilmItem