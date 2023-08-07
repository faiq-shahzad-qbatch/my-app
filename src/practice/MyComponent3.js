import React, { useMemo, useState } from "react";

function ChildComponent() {
  const [value1, setValue1] = useState(1);
  const [value2, setValue2] = useState(2);

  console.log("Child component rendered!");

  const sum = useMemo(() => {
    console.log("Calculating sum...");
    return value1 + value2;
  }, [value1, value2]);

  function newValues() {
    setValue1(3);
    setValue1(4);
  }

  function sameValues() {
    setValue1(1);
    setValue2(2);
  }

  return (
    <>
      <div>Sum: {sum}</div>
      <button onClick={newValues}>Set New Values</button>
      <br />
      <button onClick={sameValues}>Set Same Values</button>
    </>
  );
}

function MyComponent3() {
  const [parentState, setParentState] = useState("A");

  function changeParentState() {
    setParentState("B");
  }

  return (
    <>
      <h1>Parent State: {parentState}</h1>
      <button onClick={changeParentState}>Change Parent State</button>
      <ChildComponent />
    </>
  );
}

export default MyComponent3;
