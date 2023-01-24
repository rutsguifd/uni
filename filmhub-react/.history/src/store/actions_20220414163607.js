import axios from "axios";


export const moviesRequested = () => ({type: "FETCH_MOVIES"});

export const moviesRequestedSuccess = (payload) => ({type: "FETCH_MOVIES_SUCCESS", payload});

export const moviesRequestedFailure = (payload) => ({type: "FETCH_MOVIES_FAILURE", payload});

export const fetchMovies = (searchQuery) => (dispatch) => {
    dispatch(moviesRequested());
    return axios.get(`http://www.omdbapi.com/?apikey=c4183736&s=${searchQuery}`)
        .then((response) => {
            dispatch(moviesRequestedSuccess(response.data));
        })
        .catch((error) => {
            dispatch(moviesRequestedFailure(error));
        });
};