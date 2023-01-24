import { BooleanLiteral } from "typescript";

interface userState {
    users: any[];
    loading: boolean;
    error: boolean | null;
}

const initialState: userState = {
    users: [],
    loading: false,
    error: null
}

export const userReducer = (state = initialState, action) => {
    switch(action.type) {
        
        
        default:
            return state;
    }
}