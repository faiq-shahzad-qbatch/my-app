import React, { memo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../redux/actions";

function ChildComponent() {
  const count = useSelector((state) => state.count);

  // const count = 1;

  console.log("Child rendered!");

  useEffect(() => {
    console.log("Child mounted!");

    return () => {
      console.log("Child unmounted!");
    };
  });

  return (
    <>
      <h1>Value in Child: {count}</h1>
    </>
  );
}

const ChildMemo = memo(ChildComponent);

function ReduxExample() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Value from Redux: {count}</h1>
      <ChildMemo />
      <button onClick={() => dispatch(increment())}>Increment</button>
      <br />
      <br />
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </>
  );
}

export default ReduxExample;
