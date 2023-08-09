import React from "react";
import PropTypes from "prop-types";

function OriginalComponent({ text }) {
  return <h1>{text}</h1>;
}

OriginalComponent.propTypes = {
  text: PropTypes.string,
};

// Higher order component
const UpdatedComponent = (OriginalComponent) => {
  function UpdatedComponent(props) {
    return <OriginalComponent text={props.text.toUpperCase()} />;
  }

  UpdatedComponent.propTypes = {
    text: PropTypes.string,
  };

  return UpdatedComponent;
};

const EnhancedComponent = UpdatedComponent(OriginalComponent);

function HOCExample2() {
  return (
    <div>
      <OriginalComponent text={"Hello, World!"} />
      <EnhancedComponent text={"Hello, World!"} />
    </div>
  );
}

export default HOCExample2;
