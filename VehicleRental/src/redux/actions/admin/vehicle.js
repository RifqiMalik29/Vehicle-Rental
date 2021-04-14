import {
  ADMIN_ADD_VEHICLE_FAILED,
  ADMIN_ADD_VEHICLE_SUCCESS,
  ADMIN_DELETE_VEHICLE_FAILED,
  ADMIN_DELETE_VEHICLE_SUCCESS,
  ADMIN_UPDATE_VEHICLE_FAILED,
  ADMIN_UPDATE_VEHICLE_SUCCESS,
  ADMIN_GET_ALL_VEHICLES_FAILED,
  ADMIN_GET_ALL_VEHICLES_SUCESS,
  ADMIN_GET_VEHICLE_BY_ID_FAILED,
  ADMIN_GET_VEHICLE_BY_ID_SUCCESS,
} from '../../constants/admin';
import {REQUEST} from '../../constants';
import axios from 'axios';
import {ADMIN_URI} from '../../../utils';

export const addVehicle = (setData, token) => async dispatch => {
  dispatch({type: REQUEST});
  try {
    const result = await axios.post(`${ADMIN_URI}/vehicle`, setData, {
      headers: {
        Authorization: `Bearear ${token}`,
        'Content-Type': 'multipart/form-data',
        Accept: 'application/json',
      },
    });
    console.log(result);
    dispatch({type: ADMIN_ADD_VEHICLE_SUCCESS, data: result});
  } catch (error) {
    console.log(error.response);
  }
};

export const getAllVehicle = () => async dispatch => {
  dispatch({type: REQUEST});
  try {
    const result = await axios.get(`${ADMIN_URI}/vehicle`);
    dispatch({type: ADMIN_GET_ALL_VEHICLES_SUCESS, payload: result.data.data});
    console.log(result, 'ADD VEHICLE');
  } catch (error) {
    dispatch({
      type: ADMIN_GET_ALL_VEHICLES_FAILED,
      payload: error.response.data.data.message,
    });
  }
};
