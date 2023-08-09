import React, { useEffect, useState, useRef } from "react";

function UncontrolledComponent() {
  const [counter, setCounter] = useState(1);
  const counterRef = useRef(1);

  useEffect(() => {
    console.log("Component mounted!");

    return () => {
      console.log("Component unmounted!");
    };
  }, [counter]);

  function incrementStateCounter() {
    setCounter((prev) => prev + 1);
  }

  function incrementRefCounter() {
    counterRef.current++;
  }
  return (
    <>
      <h1>State Count: {counter}</h1>
      <h1>Ref Count: {counterRef.current}</h1>
      <button onClick={incrementStateCounter}>Increment State Counter</button>
      <br />
      <button onClick={incrementRefCounter}>Increment Ref Counter</button>
    </>
  );
}

export default UncontrolledComponent;
