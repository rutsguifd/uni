
const initialState = {
    movies: 
    {
        data: null,
        loading: false,
        error: false,
    }
};

const FETCH_MOVIE = "FETCH_SEARCH_MOVIE";
const FETCH_MOVIE_SUCCESS = "FETCH_MOVIE_SUCCESS";
const FETCH_MOVIE_FAILURE = "FETCH_MOVIE_FAILURE";

export const fetchDataReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_MOVIE:
            return {
                ...state, 
                movies: {
                    data: null,
                    loading: true,
                    error: false,
                }
            }
        case FETCH_MOVIE_SUCCESS:
            return {
                ...state, 
                movies: {
                    data: null,
                    loading: true,
                    error: false,
                }
            }
            case FETCH_MOVIE_FAILURE:
                return {
                    ...state, 
                    movies: {
                        data: null,
                        loading: true,
                        error: false,
                    }
                }
        default:
            return state;
    }
}