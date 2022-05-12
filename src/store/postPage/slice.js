import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  post: null,
  comments: [],
};

const feedSlice = createSlice({
  name: "postPage",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    postFullyFetched: (state, action) => {
      state.post = action.payload.post;
      state.comments = action.payload.comments;
      state.loading = false;
    },
  },
});

// remember to export the action creators for the new reducer cases
export const { startLoading, postFullyFetched } = feedSlice.actions;

export default feedSlice.reducer;
