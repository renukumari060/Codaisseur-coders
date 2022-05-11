import { configureStore } from "@reduxjs/toolkit";
import feedReducer from "./feed/slice";

const store = configureStore({
  reducer: {
    feed: feedReducer,
  },
});

export default store;
