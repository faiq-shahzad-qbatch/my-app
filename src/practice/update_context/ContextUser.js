import React, { useContext } from "react";
import { MyContext } from "./MyContext";

function ContextUser() {
  const { value, setValue } = useContext(MyContext);

  function updateContext() {
    setValue("Abdullah");
  }

  return (
    <>
      <h1>Context Value In User: {value}</h1>
      <button onClick={updateContext}>Update Context In User</button>
    </>
  );
}

export default ContextUser;
