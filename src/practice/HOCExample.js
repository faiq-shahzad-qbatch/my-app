import React, { useState } from "react";
import PropTypes from "prop-types";

function MyComponent(props) {
  const { counter, incrementCount } = props;

  return (
    <>
      <h1>Click counter: {counter}</h1>
      <button onClick={() => incrementCount()}>Click To Increase Count</button>
    </>
  );
}

MyComponent.propTypes = {
  counter: PropTypes.number,
  incrementCount: PropTypes.func,
};

const UpdatedComponent = (OriginalComponent) => {
  function NewComponent(props) {
    const [counter, setCounter] = useState(1);

    function incrementCount() {
      setCounter((counter) => counter + 1);
    }

    return (
      <OriginalComponent counter={counter} incrementCount={incrementCount} />
    );
  }

  return NewComponent;
};

const WithCounter = UpdatedComponent(MyComponent);

function HOCExample() {
  return (
    <div>
      <WithCounter />
    </div>
  );
}

export default HOCExample;
