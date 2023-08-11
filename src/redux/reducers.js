const { produce } = require("immer");

const initialState = {
  count: 0,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      // return { ...state, count: state.count + 1 };
      return produce(state, (draftState) => {
        draftState.count++;
      });
    case "DECREMENT":
      // return { ...state, count: state.count - 1 };
      return produce(state, (draftState) => {
        draftState.count--;
      });
    default:
      return state;
  }
};

export default rootReducer;
