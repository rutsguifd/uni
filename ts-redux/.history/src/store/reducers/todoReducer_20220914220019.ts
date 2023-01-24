import { todoAction, todoActionTypes, todoState } from "../../types/todo"


const initialState: todoState = {
    todos: [],
    loading: false,
    error: null,
    page: 1,
    limit: 10,
}

export const todoReducer = (state: todoState, action: todoAction): todoState => {
    switch(action.type) {
        case todoActionTypes.FETCH_TODOS:
            return {...state, loading: true}
        case todoActionTypes.FETCH_TODOS_SUCCESS:
            return {todos: action.payload, loading: false, error: null, page: 1, limit: 10}
        case todoActionTypes.FETCH_TODOS_ERROR:
            return {todos: [], loading: false, error: action.payload, page: 1, limit: 10}
        case todoActionTypes.SET_TODO_PAGE:
            return {...state, loading: false, error: null, page: action.payload, limit: 10}
        default:
            return state
    }
}