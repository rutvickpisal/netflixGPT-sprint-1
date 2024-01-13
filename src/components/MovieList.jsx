import React from "react";
import MovieCard from "./MovieCard";
import '../App.css'
const MovieList = ({ title, movies }) => {
  console.log("Movies", movies);
  return (
    <div className="px-4">
      <h1 className="text-3xl font-semibold py-3 text-white hide-scrollbar">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies?.map((movie) => {
            return <MovieCard key={movie.id} movie={movie} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
