import {LOAD_COMPANIES_SUCCESS} from "../actions/Companies";

const initialState = {
    companies: []
}

export function companies(state = initialState, action) {
    switch (action.type) {
        case LOAD_COMPANIES_SUCCESS: {
            return {
                ...state,
                companies: action.payload
            }
        }
        default : return state
    }
}
