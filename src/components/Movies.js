import React from "react";
import { movies } from "../data";

const movieList = movies.map((m) => 
  <div>
    <h1>Name: {m.title}</h1>
    Genres:
    <ul>
      <li>{m.genres}</li>
      </ul>
  </div>
)
function Movies() {
  return <div>{movieList}</div>;
}

export default Movies;
