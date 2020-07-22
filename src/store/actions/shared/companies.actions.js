import {getCompanies} from "../../../services/client";


const LOAD_COMPANIES = 'LOAD_COMPANIES';
export const LOD_COMPANIES_SUCCESS = 'LOD_COMPANIES_SUCCESS';


function loadCompanies() {
    return {
        type: LOAD_COMPANIES
    }
}

function loadCompaniesSuccess(companies) {
    return {
        type: LOD_COMPANIES_SUCCESS,
        companies
    }
}


export function handleLoadCompanies() {
    return (dispatch) => {
        return getCompanies().then( (response) => {
            dispatch(loadCompaniesSuccess(response.data))
        } )
    }
}