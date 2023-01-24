
export enum userActionTypes  { 
    FETCH_USERS = "FETCH_TODOS",
    FETCH_USERS_SUCCESS = "FETCH_TODOS_SUCCESS",
    FETCH_USERS_ERROR = "FETCH_TODOS_ERROR",
}

export interface todoState {
    users: any[];
    loading: boolean;
    error: string | null;
}

interface fetchTodosAction {
    type: userActionTypes.FETCH_USERS;
}

interface fetchTodosSuccessAction {
    type: userActionTypes.FETCH_USERS_SUCCESS;
    payload: any[];
}

interface fetchTodosErrorAction {
    type: userActionTypes.FETCH_USERS_ERROR;
    payload: string;
}

export type userAction = fetchTodosAction | fetchTodosSuccessAction | fetchTodosErrorAction;
