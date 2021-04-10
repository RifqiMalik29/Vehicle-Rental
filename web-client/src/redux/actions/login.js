import {
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from "../constants";
import axios from "axios";
import { URI } from "../../utils";

export const loginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

export const loginSuccess = (token) => {
  return {
    type: LOGIN_SUCCESS,
    payload: token,
  };
};

export const loginFailed = (error) => {
  return {
    type: LOGIN_FAILED,
    payload: error.response.data.data,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export const login = (data) => async (dispatch) => {
  loginRequest();
  try {
    const result = await axios.post(`${URI}/auth/login`, data);
    dispatch(loginSuccess(result.data.data.token));
  } catch (error) {
    dispatch(loginFailed(error));
  }
};
