import axios from "axios";
import { startLoading, postFullyFetched } from "./slice";
import { API_URL } from "../../config";

//const API_URL = `https://codaisseur-coders-network.herokuapp.com`;

export function fetchPost(id) {
  return async function thunk(dispatch, getState) {
    // dispatch start loading
    dispatch(startLoading());

    const [postResponse, commentsResponse] = await Promise.all([
      axios.get(`${API_URL}/posts/${id}`),
      axios.get(`${API_URL}/posts/${id}/comments`),
    ]);

    // dispatch postFullyFetched with the correct object parameter
    dispatch(
      postFullyFetched({
        post: postResponse.data,
        comments: commentsResponse.data,
      })
    );
  };
}
