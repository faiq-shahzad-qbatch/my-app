import React, { useEffect, useRef, useState } from "react";

function ControlledVsUncontrolledComponent() {
  const [name, setName] = useState("Faiq");
  const nameRef = useRef();

  useEffect(() => {
    console.log("Component mounted!");

    return () => {
      console.log("Component unmounted!");
    };
  }, [name]);

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function changeName() {
    nameRef.current.value = "Abdullah";
  }

  return (
    <>
      <input value={name} onChange={handleNameChange} ref={nameRef} />
      <br />
      <button onClick={changeName}>Change Name</button>
    </>
  );
}

export default ControlledVsUncontrolledComponent;
