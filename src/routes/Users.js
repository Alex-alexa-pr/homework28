import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getUsers } from "../api";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleClick = (userId) => () => {
    navigate(`/users/${userId}`);
  }

  useEffect(() => {
    getUsers().then((data) => {
      setUsers(data);
      setLoading(false);
    });
  }, []);
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Email</td>
            <td>Phone</td>
          </tr>
        </thead>
        <tbody>
          {users.map(({ id, firstName, lastName, email, phone }) => (
            <tr key={id}>
              <td>{firstName}</td>
              <td>{lastName}</td>
              <td>{email}</td>
              <td>{phone}</td>
              <td><button onClick={handleClick(id)}>Show more</button></td>
            </tr>
          ))}
        </tbody>
      </table>

    </>
  );
}

export default Users;