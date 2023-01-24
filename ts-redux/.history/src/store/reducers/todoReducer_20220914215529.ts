import { todoAction, todoActionTypes, todoState } from "../../types/todo"


export const todoReducer = (state: todoState, action: todoAction): todoState => {
    switch(action.type) {
        case todoActionTypes.FETCH_TODOS:
            return {todos:[], loading: false, error: null, page: 1, limit: 10}
        default:
            return state
    }
}