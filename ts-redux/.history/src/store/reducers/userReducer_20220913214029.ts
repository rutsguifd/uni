
interface userState {
    users: any[];
    loading: boolean;
    error: string | null;
}

const initialState = {
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