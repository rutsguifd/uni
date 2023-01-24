
const initialState = {
    movies: 
    {
        data: {
            Search: null,
            totalResults: null,
            Response: null
        },
        loading: false,
        error: false,
    }
};

const FETCH_MOVIES = "FETCH_SEARCH_MOVIES";
const FETCH_MOVIES_SUCCESS = "FETCH_MOVIES_SUCCESS";
const FETCH_MOVIES_FAILURE = "FETCH_MOVIES_FAILURE";

export const fetchDataReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_MOVIES:
            return {
                ...state, 
                movies: {
                    data: null,
                    loading: true,
                    error: false,
                }
            }
        case FETCH_MOVIES_SUCCESS:
            return {
                ...state, 
                movies: {
                    data: action.payload,
                    loading: false,
                    error: false,
                }
            }
            case FETCH_MOVIES_FAILURE:
                return {
                    ...state, 
                    movies: {
                        data: null,
                        loading: false,
                        error: action.payload,
                    }
                }
        default:
            return state;
    }
}