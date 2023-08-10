import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../../redux/actions";

function ReduxExample() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Value from Redux: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </>
  );
}

export default ReduxExample;
