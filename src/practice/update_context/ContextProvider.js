import React, { useState } from "react";
import { MyContext } from "./MyContext";
import ContextUser from "./ContextUser";

function ContextProvider() {
  const [value, setValue] = useState("Faiq");

  return (
    <>
      <h1>Context Value In Provider: {value}</h1>
      <MyContext.Provider value={{ value, setValue }}>
        <ContextUser />
      </MyContext.Provider>
    </>
  );
}

export default ContextProvider;
