
const initialState = {
    movie: 
    {
        data: null,
        loading: false,
        error: false,
    }
};

const FETCH_MOVIE = "FETCH_MOVIE";
const FETCH_MOVIE_SUCCESS = "FETCH_MOVIE_SUCCESS";
const FETCH_MOVIE_FAILURE = "FETCH_MOVIE_FAILURE";

export const fetchMovieReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_MOVIE:
            return {
                ...state, 
                movie: {
                    data: null,
                    loading: true,
                    error: false,
                }
            }
        case FETCH_MOVIE_SUCCESS:
            return {
                ...state, 
                movie: {
                    data: action.payload,
                    loading: false,
                    error: false,
                }
            }
            case FETCH_MOVIE_FAILURE:
                return {
                    ...state, 
                    movie: {
                        data: null,
                        loading: false,
                        error: action.payload,
                    }
                }
        default:
            return state;
    }
}