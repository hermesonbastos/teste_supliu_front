import React, { useEffect, useState } from "react";
import http from "../http";

const Home = () => {
  const [users, setUsers] = useState([{ name: "Hermeson", email: "hermesonbastos@gmail.com", }]);

  // useEffect(() => {
  //   fetchAllUsers();
  // }, []);

  const fetchAllUsers = () => {
    http.get("/users").then((res) => {
      setUsers(res.data);
    });
  };

  return (
    <div>
      <h2>Lista de Usuários</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Sno.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr>
              <td>{index}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>edit</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
