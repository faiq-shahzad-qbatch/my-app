import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

function FirstChild({ nameRef }) {
  useEffect(() => {
    console.log("First mounted!");

    return () => {
      console.log("First unmounted!");
    };
  }, []);

  function setName() {
    nameRef.current = "Faiq";
  }

  return (
    <>
      <h1>First Child</h1>
      <h1>Name in child: {nameRef.current}</h1>
      <button onClick={setName}>Set Name</button>
      <br />
    </>
  );
}

FirstChild.propTypes = {
  nameRef: PropTypes.object,
};

function SecondChild({ emailRef }) {
  useEffect(() => {
    console.log("Second mounted!");

    return () => {
      console.log("Second unmounted!");
    };
  }, []);

  function setEmail() {
    emailRef.current = "faiq.shahzad@qbatch.com";
  }

  return (
    <>
      <h1>Second Child</h1>
      <h1>Email in child: {emailRef.current}</h1>
      <button onClick={setEmail}>Set Email</button>
      <br />
    </>
  );
}

SecondChild.propTypes = {
  emailRef: PropTypes.object,
};

function PersistStateAcrossComponentsUseRef() {
  const [renderFirst, setRenderFirst] = useState(false);
  const [renderSecond, setRenderSecond] = useState(false);

  const nameRef = useRef("");
  const emailRef = useRef("");

  return (
    <>
      <h1>PersistStateAcrossComponentsUseRef</h1>
      <h1>Name in parent: {nameRef.current}</h1>
      <h1>Email in parent: {emailRef.current}</h1>
      {renderFirst && <FirstChild nameRef={nameRef} />}
      {renderSecond && <SecondChild emailRef={emailRef} />}

      <button onClick={() => setRenderFirst(!renderFirst)}>Toggle First</button>
      <br />
      <button onClick={() => setRenderSecond(!renderSecond)}>
        Toggle Second
      </button>
    </>
  );
}

export default PersistStateAcrossComponentsUseRef;
