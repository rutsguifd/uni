import React, { FC } from "react";
import { useSelector } from "react-redux";
import { useTypedSelector } from "../hooks/useTypedSelector";

const UserList: FC = () => {
  const { users, loading, error } = useTypedSelector(state => state.user);
  
  if (loading) {
    return <div>ups... we have got a problem</div>
  }
  return <div>
    {

    }
  </div>;
};

export default UserList;
