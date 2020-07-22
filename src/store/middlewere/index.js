import { applyMiddleware } from "redux";
import * as fromThunk from "redux-thunk";

export default applyMiddleware(fromThunk.default);
