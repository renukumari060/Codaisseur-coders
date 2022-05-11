import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  posts: [],
};

const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    postsFetched: (state, action) => {
      // console.log the action to see what data is coming from the thunk
      console.log("postsFetched action", action);

      // We will get 5 posts at a time so it's important we keep the posts
      // currently in the state and add the new incoming ones at the end of the array
      state.posts = [...state.posts, ...action.payload];
      state.loading = false;
    },
  },
});

// remember to export the action creators for the new reducer cases
export const { startLoading, postsFetched } = feedSlice.actions;

export default feedSlice.reducer;
