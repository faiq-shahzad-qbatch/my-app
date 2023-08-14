import React from "react";
import useSessionStorage from "./useSessionStorage";

function CustomHookExample2() {
  const [value, setValue] = useSessionStorage("name", "");

  return (
    <>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
    </>
  );
}

export default CustomHookExample2;
