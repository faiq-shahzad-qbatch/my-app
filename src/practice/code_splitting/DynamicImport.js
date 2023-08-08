import React from "react";

function DynamicImport() {
  function handleClick() {
    import("./moduleA")
      .then(({ myVar }) => {
        console.log(myVar);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <button onClick={handleClick}>Load</button>
    </>
  );
}

export default DynamicImport;
