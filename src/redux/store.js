import { configureStore } from "@reduxjs/toolkit";
import cocktailsReducer from "../redux/cocktailSlice";

export const store = configureStore({
  reducer: {
    cocktails: cocktailsReducer,
  },
});
