import { todoAction } from "../../types/todo"


const initialState = {
    todos: [],
    loading: false,
    error: null,
    page: 1,
    limit: 10
}

export const todoReducer = (state = initialState, action: todoAction) => {

}