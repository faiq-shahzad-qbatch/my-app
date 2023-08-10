import React, { useEffect, useLayoutEffect, useState } from "react";
// import PropTypes from "prop-types";

function UseLayoutEffectExample(props) {
  const [myState, setMyState] = useState("Hello, World!");

  useEffect(() => {
    console.log("useEffect mounted!");
    // setMyState("Bye, World!");

    return () => {
      console.log("useEffect unmounted!");
    };
  }, [myState]);

  useLayoutEffect(() => {
    console.log("useLayoutEffect mounted!");
    // setMyState("Bye, World!");

    return () => {
      console.log("useLayoutEffect unmounted!");
    };
  }, [myState]);

  function changeMyState() {
    setMyState("Bye, World!");
  }

  return (
    <>
      <h1>MyState: {myState}</h1>
      <button onClick={changeMyState}>Change My State</button>
    </>
  );
}

// UseLayoutEffectExample.propTypes = {};

export default UseLayoutEffectExample;
