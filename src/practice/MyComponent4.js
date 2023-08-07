import React, { useCallback, useState } from "react";

function MyComponent4() {
  const [count, setCount] = useState(0);

  const printMessage = useCallback(() => {
    console.log(`Counter Value: ${count}`);
  }, [count]);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div>
        <h1>Count: {count}</h1>
        <button onClick={printMessage}>Print Message</button>
        <br />
        <button onClick={incrementCount}>Increment Count</button>
      </div>
    </>
  );
}

export default MyComponent4;
