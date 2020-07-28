import {ADD_TOPIC_SUCCESS} from "../actions/Topics";
import {DELETE_TOPIC_SUCCESS} from "../actions/Topics";
import {VOTE_TOPIC_SUCCESS} from "../actions/Topics";
import {LOAD_TOPICS_SUCCESS} from "../actions/Topics";

const initialState = {
    topics: []
}


export function topics(state = initialState, action) {
    switch (action.type) {
        case ADD_TOPIC_SUCCESS: {
            return  {
                ...state,
                topics: [...state.topics, action.payload]
            }
        }
        case DELETE_TOPIC_SUCCESS: {
            const id = action.payload;
            return {
                ...state,
                topics: state.topics.filter(t => t.id !== id)
            }
        }
        case VOTE_TOPIC_SUCCESS: {
            return {
                ...state,
                topics: state.topics.map( (t) => t.id === action.payload.id ? action.payload : t )
            }
        }
        case LOAD_TOPICS_SUCCESS: {
            return {
                ...state,
                topics: action.payload
            }
        }
        default: return state;
    }
}


