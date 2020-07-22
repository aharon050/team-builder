import singInReducer from "./shared/singInReducer";
import singUpReducer from "./shared/singUpReducer";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    singUpReducer,
    singInReducer
})

export default rootReducer