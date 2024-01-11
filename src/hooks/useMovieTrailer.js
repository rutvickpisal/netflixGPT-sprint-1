import { useEffect } from "react"
import { addNowPlayingTrailer } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";

export const useMovieTrailer = (videoId) => {
    const dispatch = useDispatch();
    useEffect(() => {
        getBackgroundMovieData();
    }, [])
    const getBackgroundMovieData = async () => {
        const movieData = await fetch(
          `https://api.themoviedb.org/3/movie/${videoId}/videos`,
          API_OPTIONS
        );
        const movieDataJSON = await movieData.json();
        const filteredData = movieDataJSON.results.filter(
          (video) => video.type === "Trailer"
        );
        const Trailer = filteredData ? filteredData[0] : movieDataJSON.results[0];
        dispatch(addNowPlayingTrailer(Trailer));
      };
}