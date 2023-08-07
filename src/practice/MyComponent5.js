import React, { useState, useCallback } from "react";

// Child component that receives a function as a prop
function ChildComponent({ onClick }) {
  return (
    <div>
      <button onClick={onClick}>Click in Child</button>
    </div>
  );
}

// Parent component
function MyComponent5() {
  const [count, setCount] = useState(0);

  // Define a callback function that depends on the 'count' state
  const handleClick = useCallback(() => {
    console.log(`Button clicked! Count: ${count}`);
  }, [count]);

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <ChildComponent onClick={handleClick} />
    </div>
  );
}

export default MyComponent5;
