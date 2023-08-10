import React, { useEffect, useReducer } from "react";

function UseReducerExample() {
  const initialState = { count: 0 };

  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1 };
      case "DECREMENT":
        return { count: state.count - 1 };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    console.log("Mounted!");

    return () => {
      console.log("Unmounted!");
    };
  }, [state]);

  function testAsyncBehaviour() {
    console.log("Before dispatch:", state.count);
    dispatch({ type: "INCREMENT" });
    console.log("After dispatch:", state.count);
  }

  return (
    <>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <br />
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <br />
      <button onClick={testAsyncBehaviour}>Test Async Behaviour</button>
    </>
  );
}

export default UseReducerExample;
