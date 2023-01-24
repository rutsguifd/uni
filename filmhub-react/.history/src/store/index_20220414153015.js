import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { fetchDataReducer } from "./fetchDataReducer";
const rootReducer = combineReducers({
    fetchDataReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))