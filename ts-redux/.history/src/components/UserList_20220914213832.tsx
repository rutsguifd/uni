import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { fetchUsers } from "../store/action-creators/user";

const UserList: FC = () => {
  const { users, loading, error } = useTypedSelector((state) => state.user);
  const { fetchUsers } = useActions();
  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <h1>loading...</h1>;
  }
  if (error) {
    <h1>{error}</h1>;
  }
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          {user.id} - {user.name}
        </div>
      ))}
    </div>
  );
};

export default UserList;
