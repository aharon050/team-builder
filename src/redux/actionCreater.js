import { REGISTER, SING_IN } from "./actionTypes";
import Axios from "axios";

export function getStatus(status) {
  return {
    type: REGISTER,
    status: status,
  };
}

export function register(user, callback) {
  return (dispatch) => {
    Axios.post(
      "https://picsart-bootcamp-2020-api.herokuapp.com/api/v1/users/register",
      user
    ).then((res) => {
      callback();
    })
  };
}

export function singIn(user) {
  return {
    type: SING_IN,
    user
  };
}

export function logIn(body, callback) {
  return (dispatch) => {
    Axios.post(
      "https://picsart-bootcamp-2020-api.herokuapp.com/api/v1/users/login",
      body
    )
      .then((res) => {
        callback();
        window.localStorage.setItem('token',res.data.token)
        dispatch(singIn(res.data));
      })

  };
}
