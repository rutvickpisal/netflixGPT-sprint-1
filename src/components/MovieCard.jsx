import React from "react";

const MovieCard = ({ movie }) => {
  if(!movie.poster_path) return;
  return (
    <div className="w-48 pr-4 cursor-pointer movie-container">
      <img
      className="rounded-sm movie-image"
        alt="Movie_poster"
        src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
      />
    </div>
  );
};

export default MovieCard;
