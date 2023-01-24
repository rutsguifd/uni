import axios from "axios";

export const movieRequested = () => ({ type: "FETCH_MOVIE" });

export const movieRequestedSuccess = (payload) => ({
  type: "FETCH_MOVIE_SUCCESS",
  payload,
});

export const movieRequestedFailure = (payload) => ({
  type: "FETCH_MOVIE_FAILURE",
  payload,
});

export const fetchMovie = (id) => (dispatch) => {
  dispatch(movieRequested());
  return axios
    .get(
      `http://www.omdbapi.com/?apikey=c4183736&i=${id}&plot=full`
    )
    .then((response) => {
      dispatch(movieRequestedSuccess(response.data));
      console.log(response.data);
    })
    .catch((error) => {
      dispatch(movieRequestedFailure(error));
    });
};
