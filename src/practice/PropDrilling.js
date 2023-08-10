import React from "react";
import PropTypes from "prop-types";

function Grandchild({ message }) {
  return <p>Message from Grandchild: {message}</p>;
}

Grandchild.propTypes = {
  message: PropTypes.string,
};

function Child({ message }) {
  return <Grandchild message={message} />;
}

Child.propTypes = {
  message: PropTypes.string,
};

function Parent({ message }) {
  return <Child message={message} />;
}

Parent.propTypes = {
  message: PropTypes.string,
};

function PropDrilling() {
  const message = "Hello, World!";

  return (
    <div>
      <h1>App Component</h1>
      <Parent message={message} />
    </div>
  );
}

export default PropDrilling;
