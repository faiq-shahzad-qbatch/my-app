import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
// import PropTypes from "prop-types";

function UseRefExample(props) {
  const divRef = useRef(null);

  useEffect(() => {
    const myDiv = divRef.current;
    myDiv.style.backgroundColor = "red";
  }, []);

  return <div ref={divRef}>UseRefExample</div>;
}

// UseRefExample.propTypes = {};

export default UseRefExample;
