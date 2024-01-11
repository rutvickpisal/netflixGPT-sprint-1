import React from "react";
import { useSelector } from "react-redux";
import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";
import { useMovieTrailer } from "../hooks/useMovieTrailer";

const VideoBackground = ({ videoId }) => {
  useNowPlayingMovies();
  useMovieTrailer(videoId)
  const nowPlayingTrailer = useSelector(
    (store) => store.movies?.nowPlayingTrailer
  );
  return (
    <div>
      <iframe
      className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${nowPlayingTrailer?.key}?autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
