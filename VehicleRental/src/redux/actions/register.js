import {REQUEST, REGISTER_FAILED, REGISTER_SUCCESS} from '../constants';
import axios from 'axios';
import {URI} from '../../utils';

export const request = () => {
  return {
    type: REQUEST,
  };
};

export const registerSuccess = message => {
  return {
    type: REGISTER_SUCCESS,
    payload: message,
  };
};

export const registerFailed = error => {
  return {
    type: REGISTER_FAILED,
    payload: error,
  };
};

export const register = setData => async dispatch => {
  dispatch(request());
  try {
    const result = await axios.post(`${URI}/auth/register`, setData);
    dispatch(registerSuccess(result.data.message));
  } catch (error) {
    dispatch(registerFailed(error.response.data.message));
  }
};
