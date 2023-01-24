import axios from "axios";

const initialState = {
    movies: []
};

const FETCH_SEARCH_MOVIE = "FETCH_SEARCH_MOVIE";
async function fetchSearchMovie(searchQuery) {await axios.get(`http://www.omdbapi.com/?apikey=c4183736&s=${searchQuery}`)
.then((response)=>response.data);}

export const fetchDataReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_SEARCH_MOVIE:
            return {...state, movies: [...state.fetchDataReducer, await fetchSearchMovie(action.payload)]}
        default:
            return state;
    }
}