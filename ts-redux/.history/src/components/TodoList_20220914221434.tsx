import React, { FC } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";

const TodoList: FC = () => {
  const { todos, loading, error, page, limit } = useTypedSelector(
    (state) => state.todo
  );

  if (loading) {
    return <h1>loading...</h1>;
  }
  if (error) {
    <h1>{error}</h1>;
  }
  return <div></div>;
};

export default TodoList;
