import Axios from "axios";
export const LOAD_COMPANIES_SUCCESS = 'LOAD_COMPANIES_SUCCESS';

function loadCompaniesSuccess(payload) {
    return {
        type: LOAD_COMPANIES_SUCCESS,
        payload
    }
}

export function handleLoadCompanies() {
    return (dispatch) => {
        return Axios.get(
            "https://picsart-bootcamp-2020-api.herokuapp.com/api/v1/companies"
        ).then((res) => {
            dispatch(loadCompaniesSuccess(res.data))
        });
    }
}
