import React, { useEffect } from "react";

function UseEffectExample() {
  useEffect(() => {
    console.log("Component mounted!");

    return () => {
      console.log("Component unmounted!");
    };
  }, []);

  return (
    <div>
      <h1>useEffect Example</h1>
    </div>
  );
}

export default UseEffectExample;
