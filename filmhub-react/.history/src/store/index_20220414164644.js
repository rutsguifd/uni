import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import fetchDataReducer from "./reducers/fetchDataReducer.js"
const rootReducer = combineReducers({
    fetchDataReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))