import React, { useEffect, useState } from "react";

function UseEffectExample() {
  const [myState, setMyState] = useState(true);

  console.log("Render!");

  useEffect(() => {
    console.log("Component mounted!");

    return () => {
      console.log("Component unmounted!");
    };
  });

  function changeMyState() {
    setMyState(!myState);
  }

  return (
    <div>
      <h1>useEffect Example</h1>
      {myState && <h2>myState</h2>}
      <button onClick={changeMyState}>Change My State</button>
    </div>
  );
}

export default UseEffectExample;
