import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const MoviesData = useSelector((store) => store.gptSearch?.gptMovies);
  if (!MoviesData) return;
  const { MovieNames, WholeMoviesArray } = MoviesData;
  return (
    <div className="bg-black mt-5 bg-opacity-80">
        {MovieNames.map((movie, index) => {
          return (
            <MovieList
              key={movie}
              title={movie}
              movies={WholeMoviesArray[index]}
            />
          );
        })}
    </div>
  );
};

export default GptMovieSuggestions;
