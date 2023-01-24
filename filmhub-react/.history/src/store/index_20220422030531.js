import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { fetchDataReducer } from "./reducers/fetchDataReducer"
import { fetchMovieReducer } from "./reducers/fetchMovieReducer";
const rootReducer = combineReducers({
    fetchDataReducer,
    fetchMovieReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))