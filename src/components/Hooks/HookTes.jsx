import axios from "axios";
import React, { useState, useEffect } from "react";

export default function HookTes() {
  const [state, setState] = useState({
    users: [],
  });
  useEffect(() => {
    console.log("Hi");
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((resp) => setState({ users: resp.data }));
  }, []);
  return (
    <>
      {state ? (
        <div className="card-content">
          <h1 className="card-content__title">Users</h1>
          {state.users.map((user) => (
            <div className="card-content__users" key={user.id}>
              <h1>{user.username}</h1>
              <p>{user.email}</p>
              <p>{user.phone}</p>
            </div>
          ))}
        </div>
      ) : (
        <h3>This user not exist</h3>
      )}
    </>
  );
}
