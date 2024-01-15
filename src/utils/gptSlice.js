import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    isGptSearchActive: true,
    gptMovies: null
  },
  reducers: {
    toggleGptSearch: (state, action) => {
      state.isGptSearchActive = !state.isGptSearchActive;
    },
    addGptMovies: (state, action) => {
      state.gptMovies = action.payload;
    }
  },
});

export const { toggleGptSearch, addGptMovies } = gptSlice.actions;
export default gptSlice.reducer;
