import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

export const usePopularMovies = () => {
    const dispatch = useDispatch();

    const getMoviesData = async () => {
        const moviesData = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS)
        const data = await moviesData.json();
        dispatch(addPopularMovies(data.results))
      }
    
    useEffect( () => {
      getMoviesData();
    }, [])

}
