import React from "react";
import store from "./redux/store";

import { addBug, removeBug } from "./redux/actionCreator";

function Driver() {
  const unsubscribe = store.subscribe(() => {
    console.log("Store Changed!", store.getState());
  });

  store.dispatch(addBug("Bug 1"));

  unsubscribe();

  store.dispatch(removeBug(1));

  console.log(store.getState());

  return <div>Driver</div>;
}

export default Driver;
