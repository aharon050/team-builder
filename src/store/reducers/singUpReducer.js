import { REGISTER } from "../../redux/actionTypes";

let initialState = { status: 0 };

const singUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
      return {
        status: state.status + action.status,
      };
    default:
      return state;
  }
};

export default singUpReducer;





