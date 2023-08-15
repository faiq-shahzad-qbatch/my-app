import React from "react";
import useOnlineStatus from "./useOnlineStatus";

function UseOnlineStatusExample() {
  const isOnline = useOnlineStatus();
  return (
    <>
      <h1>{isOnline ? "✅ Online" : "❌ Disconnected"} </h1>
    </>
  );
}

export default UseOnlineStatusExample;
