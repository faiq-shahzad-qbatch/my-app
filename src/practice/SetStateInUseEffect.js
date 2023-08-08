import React, { useEffect, useState } from "react";

function SetStateInUseEffect() {
  const [val, setVal] = useState("A");

  useEffect(() => {
    console.log(val);
    setVal("B");
    console.log(`Value after setVal("B")`, val);
    setVal("C");
    console.log(`Value after setVal("C")`, val);
    setVal("D");
    console.log(`Value after setVal("D")`, val);
  }, [val]);

  function handleClick() {
    setVal("M");
  }

  return (
    <>
      <div onClick={handleClick}>{val}</div>
    </>
  );
}

export default SetStateInUseEffect;
