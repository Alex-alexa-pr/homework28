import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { getUserById } from "../api";

const User = () => {
  const { userId } = useParams();
  const [user, setUser] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getUserById(userId).then((data) => {
        setUser(data);
        setLoading(false);
    });
  }, [userId]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Link to="/users">Back to Users</Link>
      <h3>Name: {user.firstName}, {user.lastName}</h3>
      <p>age: {user.age}, gender: {user.gender}, username: {user.username}, birthDate: {user.birthDate}</p>
    </div>
  );
};

export default User;