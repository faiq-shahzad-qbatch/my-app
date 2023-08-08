import React, { memo, useState } from "react";
import PropTypes from "prop-types";

const Greetings = memo(function Greetings({ name }) {
  console.log("Component rendered!");
  const [myState, setMyState] = useState(1);

  function changeMyState() {
    setMyState(2);
  }

  return (
    <>
      <h1>
        Hello, {name}, MyState: {myState}
      </h1>
      <button onClick={changeMyState}>Change myState (Will Rerender)</button>
    </>
  );
});

Greetings.propTypes = {
  name: PropTypes.string.isRequired,
};

function ReactMemoExample() {
  const [name, setName] = useState("Faiq");
  const [age, setAge] = useState(23);

  function changeName() {
    setName("Abdullah");
  }

  function changeAge() {
    setAge(24);
  }

  return (
    <>
      <Greetings name={name} />
      <h2>{age}</h2>
      <button onClick={changeName}>Change Name (Will Rerender)</button>
      <br />
      <button onClick={changeAge}>Change Age (Will Not Rerender)</button>
    </>
  );
}

export default ReactMemoExample;
