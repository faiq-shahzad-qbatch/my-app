import React from "react";
import PropTypes from "prop-types";

function ChildComponent(props) {
  console.log(props);
  return <>{props.children}</>;
}

ChildComponent.propTypes = {
  children: PropTypes.array,
};

function ChildrenExample() {
  return (
    <>
      <ChildComponent>
        <h1>Hello, World!</h1>
        <h1>Bye, World!</h1>
      </ChildComponent>
    </>
  );
}

export default ChildrenExample;
