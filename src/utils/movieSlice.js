import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    nowPlayingTrailer: null
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addNowPlayingTrailer: (state, action) => {
      state.nowPlayingTrailer = action.payload
    }
  },
});

export default moviesSlice.reducer;
export const { addNowPlayingMovies, addNowPlayingTrailer } = moviesSlice.actions;
