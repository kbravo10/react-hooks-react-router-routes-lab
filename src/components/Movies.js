import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <>
      <h1>Movies Page</h1>

      {movies.map((movie, index) => {
        return (
          <div key={index}>
            <h2>
              {movie.title}-{movie.time} minutes long
            </h2>
            <ul>
              {movie.genres.map((genre, index) => {
                return <li key={index}>{genre}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </>
  );
}

export default Movies;
