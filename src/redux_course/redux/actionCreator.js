import * as actions from "./actionTypes";

export const addBug = (description) => {
  return {
    type: actions.ADD_BUG,
    payload: {
      description,
    },
  };
};

export const removeBug = (id) => {
  return {
    type: "REMOVE_BUG",
    payload: {
      id,
    },
  };
};
