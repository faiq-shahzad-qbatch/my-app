import React, { useState } from "react";

function SetStateByValueVsWithFunction() {
  const [counter, setCounter] = useState(1);

  function changeCounterByValue() {
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
  }

  function changeCounterWithFunction() {
    setCounter((counter) => counter + 1);
    setCounter((counter) => counter + 1);
    setCounter((counter) => counter + 1);
  }

  return (
    <>
      <button onClick={changeCounterByValue}>
        Click here to increment the counter by value: {counter}
      </button>
      <br />
      <button onClick={changeCounterWithFunction}>
        Click here to increment the counter with a function: {counter}
      </button>
    </>
  );
}

export default SetStateByValueVsWithFunction;
