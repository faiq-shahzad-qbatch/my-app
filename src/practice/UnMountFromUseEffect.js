import React, { useEffect, useState } from "react";

function ChildComponent() {
  useEffect(() => {
    console.log("Child component mounted!");

    return () => {
      console.log("Child component unmounted!");
    };
  }, []);

  return <div>Hello, World!</div>;
}

function UnMountFromUseEffect() {
  const [showDiv, setShowDiv] = useState(true);

  useEffect(() => {
    alert(
      `The child component containing "Hello, World" will unmount when you press "OK"`,
    );
    setShowDiv(false);
  }, []);

  return <>{showDiv && <ChildComponent />}</>;
}

export default UnMountFromUseEffect;
