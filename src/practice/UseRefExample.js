import React, { useEffect, useState, useRef } from "react";

function UseRefExample(props) {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);

  useEffect(() => {
    countRef.current = count;
  }, [count]);

  function incrementCount() {
    setCount(count + 1);
  }

  return (
    <>
      <h1>Count: {count}</h1>
      <h1>CountRef: {countRef.current}</h1>
      <button onClick={incrementCount}>Increment Count</button>
    </>
  );
}

export default UseRefExample;
