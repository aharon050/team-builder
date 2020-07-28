import Axios from "axios";


export const LOAD_TOPICS_SUCCESS = 'LOAD_TOPICS_SUCCESS';
export const VOTE_TOPIC_SUCCESS = 'VOTE_TOPIC_SUCCESS';
export const ADD_TOPIC_SUCCESS = 'ADD_TOPIC_SUCCESS';
export const DELETE_TOPIC_SUCCESS = 'DELETE_TOPIC_SUCCESS';


export function loadTopicsSuccess(payload) {
    return {
        type: LOAD_TOPICS_SUCCESS,
        payload
    }
}

export function handleLoadTopics() {
    return (dispatch) => {
        return Axios.get('https://picsart-bootcamp-2020-api.herokuapp.com/api/v1/topics',
            { headers: { token: window.localStorage.getItem("token") } })
            .then( (res) => {
                dispatch(loadTopicsSuccess(res.data))
            } )
    }
}

export function voteTopicSuccess(payload) {
    return {
        type: VOTE_TOPIC_SUCCESS,
        payload
    }
}

export function handleVoteTopics(id,type) {
    return (dispatch) => {
        return Axios.post(`https://picsart-bootcamp-2020-api.herokuapp.com/api/v1/topics/${id}/voting`,
            type,
            { headers: { token: window.localStorage.getItem("token") } })
            .then( (res) => {
                dispatch(voteTopicSuccess(res.data))
            } )
    }
}

export function addTopicSuccess(payload) {
    return {
        type: ADD_TOPIC_SUCCESS,
        payload
    }
}

export function handleAddTopic(topic, cb) {
    return (dispatch) => {

        return Axios.post( 'https://picsart-bootcamp-2020-api.herokuapp.com/api/v1/topics',
            topic,
            { headers: { token: window.localStorage.getItem("token") } } )
            .then( (res) => {
                cb();
                dispatch( addTopicSuccess(topic) )
            } )
    }
}

export function deleteTopicSuccess(payload) {
    return {
        type: DELETE_TOPIC_SUCCESS,
        payload
    }
}

export function handleDeleteTopic(id) {
    return (dispatch) => {
        return Axios.delete( `https://picsart-bootcamp-2020-api.herokuapp.com/api/v1/topics/${id}`,
            { headers: { token: window.localStorage.getItem("token") } })
            .then( (res) => {
                dispatch( deleteTopicSuccess(id) )
            } )
    }
}


