import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movies?.nowPlayingMovies
  );
  const popularMovies = useSelector((store) => store.movies?.popularMovies);
  const trendingMovies = useSelector((store) => store.movies?.trendingMovies);
  const upcomingMovies = useSelector((store) => store.movies?.upcomingMovies);
  return (
    nowPlayingMovies && (
      <div className="bg-black w-screen">
        <div className="-mt-80 relative z-30">
          <MovieList title={"Now playing"} movies={nowPlayingMovies} />
          <MovieList title={"Upcoming movies"} movies={upcomingMovies} />
          <MovieList title={"Trending"} movies={popularMovies} />
          <MovieList title={"Popular movies"} movies={trendingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
