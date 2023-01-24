
export enum todoActionTypes  { 
    FETCH_TODOS = "FETCH_TODOS",
    FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS",
    FETCH_TODOS_ERROR = "FETCH_TODOS_ERROR",
    SET_TODO_PAGE = "SET_TODO_PAGE",
}

export interface todoState {
    todos: any[];
    loading: boolean;
    error: string | null;
    page: number;
    limit: number;
}

interface fetchTodosAction {
    type: todoActionTypes.FETCH_TODOS;
}

interface fetchTodosSuccessAction {
    type: todoActionTypes.FETCH_TODOS_SUCCESS;
    payload: any[];
}

interface fetchTodosErrorAction {
    type: todoActionTypes.FETCH_TODOS_ERROR;
    payload: string;
}

interface setTodoPageAction {
    type: todoActionTypes.SET_TODO_PAGE;
    payload: number;
}

export type todoAction = fetchTodosAction | fetchTodosSuccessAction | fetchTodosErrorAction | setTodoPageAction;
