

enum userActionTypes  { 
    FETCH_USERS = "FETCH_USERS",
    FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
    FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
}

interface userState {
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

type userAction = fetchUsersAction | fetchUsersSuccessAction | fetchUsersErrorAction;

const initialState: userState = {
    users: [],
    loading: false,
    error: null
}

export const userReducer = (state = initialState, action: userAction): userState  => {
    switch(action.type) {
        case userActionTypes.FETCH_USERS:
            return {loading: true, error: null, users: []}
        case userActionTypes.FETCH_USERS_SUCCESS:
            return {loading: false, error: null, users: action.payload}
        case userActionTypes.FETCH_USERS_ERROR:
            return {loading: false, error: action.payload, users: []}
        default:
            return state;
    }
}