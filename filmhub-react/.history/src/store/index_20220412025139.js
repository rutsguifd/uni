import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { fetchDataReducer } from "./fetchDataReducer";
const rootReducer = combineReducers({
    fetchData: fetchDataReducer
})

export const store = createStore(rootReducer, composeWithDevTools())