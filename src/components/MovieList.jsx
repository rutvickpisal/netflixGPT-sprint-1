import React from "react";
import MovieCard from "./MovieCard";

export const MovieList = ({ title, movies }) => {
  return (
    <div className="px-4">
      <h1 className="text-3xl font-semibold py-3 text-white">{title}</h1>
      <div className="flex movie-list-container">
        <div className="movie-list">
          {movies?.map((movie) => {
            return <MovieCard key={movie.id} movie={movie} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
