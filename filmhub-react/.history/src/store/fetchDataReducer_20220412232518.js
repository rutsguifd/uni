import axios from "axios";

const initialState = {
    movies: []
};

const FETCH_SEARCH_MOVIE = "FETCH_SEARCH_MOVIE";

export const fetchDataReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_SEARCH_MOVIE:
            return {...state, movies: action.payload}
        default:
            return state;
    }
}