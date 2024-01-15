import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

export const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovieIsAvailable = useSelector(
    (store) => store.movies?.nowPlayingMovies
  );

  const getMoviesData = async () => {
    const moviesData = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    );
    const data = await moviesData.json();
    dispatch(addNowPlayingMovies(data.results));
  };

  useEffect(() => {
    if (!nowPlayingMovieIsAvailable) {
      getMoviesData();
    }
  }, []);
};
