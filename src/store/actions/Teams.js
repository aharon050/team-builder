import Axios from "axios";

export const LOAD_TEAMS_SUCCESS = 'LOAD_TEAMS_SUCCESS';

function loadTeamsSuccess(payload) {
    return {
        type: LOAD_TEAMS_SUCCESS,
        payload
    }
}

export function handleLoadTeams() {
    return (dispatch) => {
        return Axios.get('https://picsart-bootcamp-2020-api.herokuapp.com/api/v1/teams', {
            headers: { token: window.localStorage.getItem("token") }})
            .then( (res) => {
                dispatch( loadTeamsSuccess(res.data) )
            } )
    }
}
