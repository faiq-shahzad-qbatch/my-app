import React from "react";
import loadable from "@loadable/component";

function LoadableExample() {
  const Component = loadable(() => import("./ComponentToLoad"), {
    fallback: <h1>Loading...</h1>,
  });

  return (
    <div>
      <Component />
    </div>
  );
}

export default LoadableExample;
