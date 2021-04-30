import React, { useState } from "react";

export default function HookTes() {
  const [state, setState] = useState({
    name: "Milton",
    cargo: "CTO",
  });
  const changeCargo = (cargo) => {
    setState({
      ...state,
      cargo,
    });
  };
  return (
    <>
      {state ? (
        <div>
          <h1>Hello Sr. {state.name}</h1>
          <h2>Your cargo is {state.cargo}</h2>
          <button onClick={changeCargo.bind(this,"CEO")}>change Cargo</button>
        </div>
      ) : (
        <h3>This user not exist</h3>
      )}
    </>
  );
}
