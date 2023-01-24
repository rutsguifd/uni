import { userAction, userActionTypes } from "../../types/user";
import { Dispatch } from "redux";
import axios from "axios";

export const fetchUsers = () => {
  return async (dispatch: Dispatch<userAction>) => {
    try {
      dispatch({ type: userActionTypes.FETCH_USERS });
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      dispatch({
        type: userActionTypes.FETCH_USERS_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: userActionTypes.FETCH_USERS_ERROR,
        payload: "ups.. looks like we have got a problem",
      });
    }
  };
};
