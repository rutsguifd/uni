
export enum userActionTypes  { 
    FETCH_USERS = "FETCH_USERS",
    FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
    FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
}

export interface userState {
    users: any[];
    loading: boolean;
    error: string | null;
}

interface fetchUsersAction {
    type: userActionTypes.FETCH_USERS;
}

interface fetchUsersSuccessAction {
    type: userActionTypes.FETCH_USERS_SUCCESS;
    payload: any[];
}

interface fetchUsersErrorAction {
    type: userActionTypes.FETCH_USERS_ERROR;
    payload: string;
}

export type userAction = fetchUsersAction | fetchUsersSuccessAction | fetchUsersErrorAction;
