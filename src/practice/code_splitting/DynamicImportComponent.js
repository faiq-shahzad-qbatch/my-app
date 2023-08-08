import React, { useState } from "react";

function DynamicImportComponent() {
  const [module, setModule] = useState(null);

  function handleClick() {
    import("./ComponentToLoad")
      .then((module) => {
        setModule(module.default);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      {module ? module : <h1>Press button to lazy load module</h1>}
      <button onClick={handleClick}>Load</button>
    </>
  );
}

export default DynamicImportComponent;
