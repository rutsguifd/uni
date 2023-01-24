import { Dispatch } from "redux";
import axios from "axios";
import { todoAction, todoActionTypes } from "../../types/todo";


export const fetchTodos = () => {
  return async (dispatch: Dispatch<todoAction>) => {
    try {
      dispatch({ type: todoActionTypes.FETCH_TODOS });
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      dispatch({
        type: todoActionTypes.FETCH_TODOS_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: todoActionTypes.FETCH_TODOS_ERROR,
        payload: "ups.. looks like we have got a problem",
      });
    }
  };
};
