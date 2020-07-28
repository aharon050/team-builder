import {LOAD_TEAMS_SUCCESS} from "../actions/Teams";

const initialState = {
    teams: []
}

export function teams(state = initialState, action) {
    switch (action.type) {
        case LOAD_TEAMS_SUCCESS: {
            return  {
                teams: action.payload
            }
        }
        default: return state
    }
}
