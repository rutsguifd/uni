import React, { FC, useEffect } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const TodoList: FC = () => {
  const { todos, loading, error, page, limit } = useTypedSelector(
    (state) => state.todo
  );

  const { fetchTodos } = useActions();
    const pages = [1, 2, 3, 4, 5]


  useEffect(() => {
    fetchTodos(page, limit);
  }, [page]);

  if (loading) {
    return <h1>loading...</h1>;
  }
  if (error) {
    <h1>{error}</h1>;
  }
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.id} - {todo.title}
        </div>
      ))}
      <div style={{display: "flex", padding: 10}}>
        {
            pages.map(p => <div style={{border: p===page ? '2px solid green' : '1px solid gray', padding: 10}} key={p}>{p}</div>)
        }
      </div>
    </div>
  );
};

export default TodoList;
