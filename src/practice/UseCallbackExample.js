import React, { memo, useState, useCallback } from "react";
import PropTypes from "prop-types";

const ChildComponent = memo(function ChildComponent({ greetFunction }) {
  console.log("Child component rendered!");

  return (
    <>
      <button onClick={greetFunction}>Click Function In Child</button>
    </>
  );
});

ChildComponent.propTypes = {
  greetFunction: PropTypes.func.isRequired,
};

function UseCallbackExample() {
  console.log("Parent component rendered!");
  const [name, setName] = useState("Faiq");
  const [age, setAge] = useState(23);

  const greet = useCallback(
    function greet() {
      console.log(`Hello, ${name}`);
    },
    [name],
  );

  function changeName() {
    setName("Abdullah");
  }

  function changeAge() {
    setAge(24);
  }

  return (
    <>
      <h1>Name: {name}</h1>
      <h1>Age: {age}</h1>
      <button onClick={changeName}>Change Name</button>
      <br />
      <button onClick={changeAge}>Change Age</button>
      <br />
      <ChildComponent greetFunction={greet} />
    </>
  );
}

export default UseCallbackExample;
