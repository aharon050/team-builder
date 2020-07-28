import singInReducer from "./singInReducer";
import singUpReducer from "./singUpReducer";
import {combineReducers} from "redux";
import {companies} from "./Comapnies";
import {topics} from "./Topics";
import {teams} from "./Teams";

const rootReducer = combineReducers({
    singUpReducer,
    singInReducer,
    companies,
    topics,
    teams
})

export default rootReducer
