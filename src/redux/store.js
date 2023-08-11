import { legacy_createStore as createStore } from "redux"; // Import createStore directly
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  rootReducer,
  composeWithDevTools(), // Add parentheses here
);

export default store;
