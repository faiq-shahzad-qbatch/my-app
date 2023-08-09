import React, { useEffect, useState } from "react";

function ControlledComponent() {
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    console.log("Component mounted!");

    return () => {
      console.log("Component unmounted!");
    };
  }, [counter]);

  function incrementCounter() {
    setCounter((prev) => prev + 1);
  }
  return (
    <>
      <h1>Count: {counter}</h1>
      <button onClick={incrementCounter}>Increment Counter</button>
    </>
  );
}

export default ControlledComponent;
