import React, { useEffect, useState } from "react";

function MyComponent() {
  // const [showDiv, setShowDiv] = useState(true);
  // const [val, setVal] = useState("A");
  const [val, setVal] = useState(1);

  // useEffect(() => {
  //   alert(`The div containing "Hello, World" will unmount when you press "OK"`);
  //   setShowDiv(false);
  // }, []);

  // useEffect(() => {
  //   console.log(val);
  //   setVal("B");
  //   console.log(`Value after setVal("B")`, val);
  //   setVal("C");
  //   console.log(`Value after setVal("C")`, val);
  //   setVal("D");
  //   console.log(`Value after setVal("D")`, val);
  // }, [val]);

  // useEffect(() => {
  //   setVal(val + 1);
  // }, [val]);

  // return <>{showDiv && <div>Hello, World!</div>}</>;

  function handleChange() {
    // setVal(val + 1);
    // setVal(val + 1);
    // setVal(val + 1);

    setVal((val) => val + 1);
    setVal((val) => val + 1);
    setVal((val) => val + 1);
  }

  return (
    <>
      <div onClick={handleChange}>{val}</div>
    </>
  );
}

export default MyComponent;
