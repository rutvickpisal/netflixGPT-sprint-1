import React, { useRef } from "react";
import openai from "../utils/openAI";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGptMovies } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);
  
  const handleGPTSearch = async () => {
    const gptQuery =
      "Act as a movie recommendation system and suggest some movies for the following query.";
    const gptPostQuery =
      " return me the results with maximum 5 movies by comma seperation like a js comma seperated string. for example: movie1, movie2, movie3]and so on. Do not give me any other text other than the movie or series names.";
    const gptSearchResults = await openai.chat.completions.create({
      messages: [
        {
          role: "user",
          content: gptQuery + searchText.current.value + gptPostQuery,
        },
      ],
      model: "gpt-3.5-turbo",
    });
    const gptMoviesArray =
      gptSearchResults?.choices[0].message.content.split(",");

    const promiseArrayOfMovies = gptMoviesArray.map((movie) => getMovie(movie));
    const tmdbResults = await Promise.all(promiseArrayOfMovies);
    dispatch(addGptMovies({MovieNames:gptMoviesArray,  WholeMoviesArray: tmdbResults}))
    searchText.current.value = ""
  };

  const getMovie = async (query) => {
    const movieData = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`, API_OPTIONS
    );
    const data = await movieData.json();
    return data?.results;
  };

  return (
    <>
      <div className="pt-[10%] flex justify-center z-50">
        <form
          className="bg-black w-1/2 grid grid-cols-12"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="What  do you feel like watching today?"
            className="p-4 m-4 rounded-sm col-span-9"
            ref={searchText}
          ></input>
          <button
            className="py-2 px-4 bg-red-700 rounded-sm text-white col-span-3 m-4 font-bold font-serif"
            onClick={handleGPTSearch}
          >
            Search
          </button>
        </form>
      </div>
    </>
  );
};

export default GptSearchBar;
