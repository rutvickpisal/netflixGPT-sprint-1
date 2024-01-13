import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrendingMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

export const useTrendingMovies = () => {
    const dispatch = useDispatch();

    const getMoviesData = async () => {
        const moviesData = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS)
        const data = await moviesData.json();
        dispatch(addTrendingMovies(data.results))
      }
    
    useEffect( () => {
      getMoviesData();
    }, [])

}
