import axios from "axios";

const initialState = [];

const FETCH_SEARCH_MOVIE = "FETCH_SEARCH_MOVIE";
const fetchSearchMovie = () => axios.get('http://www.omdbapi.com/?apikey=c4183736&s=superman&page=2')
.then((response)=>response.data);

export const fetchDataReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_SEARCH_MOVIE:
            return [...state, fetchSearchMovie()]
        default:
            return state;
    }
}