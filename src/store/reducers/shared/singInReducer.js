import {REGISTER,SING_IN} from "../../../redux/actionTypes";

const singInReducer = (state={user:{}},action) =>{
    switch (action.type) {
        case SING_IN:
            return {user:{...action.user}}

        default:return state
    }

}

export default singInReducer