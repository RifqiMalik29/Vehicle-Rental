import {REQUEST, LOGIN_FAILED, LOGIN_SUCCESS, LOGOUT} from '../constants';
import axios from 'axios';
import {URI} from '../../utils';

export const request = () => {
  return {
    type: REQUEST,
  };
};

export const loginFailed = error => {
  return {
    type: LOGIN_FAILED,
    payload: error.response.data.data.message,
  };
};

export const loginSuccess = token => {
  return {
    type: LOGIN_SUCCESS,
    payload: token,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export const login = data => async dispatch => {
  request();
  try {
    const result = await axios.post(`${URI}/auth/login`, data);
    dispatch(loginSuccess(result.data.data.token));
  } catch (error) {
    dispatch(loginFailed(error));
  }
};
