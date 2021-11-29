import React from "react";
import { actors } from "../data";

const actorList = actors.map((a) => 
  <div>
    <h1>Name: {a.name}</h1>
    Movies:
    <ul>
        <li>{a.movies}</li>
      </ul>
  </div>
)

function Actors() {
  return (
  <div>
        {actorList}
  </div>
  )
}

export default Actors;
