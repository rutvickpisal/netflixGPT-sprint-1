import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";

export const useUpcomingMovies = () => {
    const dispatch = useDispatch();

    const getMoviesData = async () => {
        const moviesData = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS)
        const data = await moviesData.json();
        dispatch(addUpcomingMovies(data.results))
      }
    
    useEffect( () => {
      getMoviesData();
    }, [])

}
