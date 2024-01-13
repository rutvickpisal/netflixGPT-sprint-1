import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="w-48 pr-4">
      <img
        alt="Movie_poster"
        src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
      />
    </div>
  );
};

export default MovieCard;
