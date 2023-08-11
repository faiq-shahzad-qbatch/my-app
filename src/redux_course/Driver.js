import React from "react";
import store from "./redux/store";

function Driver() {
  const unsubscribe = store.subscribe(() => {
    console.log("Store Changed!", store.getState());
  });

  store.dispatch({
    type: "ADD_BUG",
    payload: {
      description: "Hello, World!",
    },
  });

  unsubscribe();

  store.dispatch({
    type: "REMOVE_BUG",
    payload: {
      id: 1,
    },
  });

  console.log(store.getState());

  return <div>Driver</div>;
}

export default Driver;
