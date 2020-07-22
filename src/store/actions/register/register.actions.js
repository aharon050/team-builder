import { registerUser } from "../../../services/client";
import Axios from "axios";

const REGISTER = "REGISTER";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";

function loadCompanies() {
  return {
    type: REGISTER,
  };
}

function loadCompaniesSuccess() {
  return {
    type: REGISTER_SUCCESS,

  };
}

export const singUpActions = (user) => {
  return (dispatch) => {
    return Axios.post("https://picsart-bootcamp-2020-api.herokuapp.com/api/v1/users/register",user).then((response) => {
      dispatch(loadCompaniesSuccess(response.data));
    });
  };
};
