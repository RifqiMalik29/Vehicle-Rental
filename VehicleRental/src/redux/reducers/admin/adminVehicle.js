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

const initialState = {
  vehicleData: [],
  vehicleById: [],
  error: '',
  loading: false,
  isSuccess: false,
  isFailed: false,
  isAddSuccess: false,
  isAddFailed: false,
  isEditSuccess: false,
  isEditFailed: false,
  isDeleteSuccess: false,
  isDeleteFailed: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_ADD_VEHICLE_FAILED:
      return {
        ...state,
        loading: false,
        isAddSuccess: false,
        isAddFailed: true,
      };
    case ADMIN_ADD_VEHICLE_SUCCESS:
      return {
        ...state,
        loading: false,
        isAddSuccess: true,
        isAddFailed: false,
      };
    case ADMIN_DELETE_VEHICLE_FAILED:
      return {
        ...state,
        loading: false,
        isDeleteFailed: true,
        isDeleteSuccess: false,
      };
    case ADMIN_DELETE_VEHICLE_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleteFailed: false,
        isDeleteSuccess: true,
      };
    case ADMIN_UPDATE_VEHICLE_FAILED:
      return {
        ...state,
        loading: false,
        isEditFailed: true,
        isEditSuccess: false,
      };
    case ADMIN_UPDATE_VEHICLE_SUCCESS:
      return {
        ...state,
        loading: false,
        isEditFailed: false,
        isEditSuccess: true,
      };
    case ADMIN_GET_ALL_VEHICLES_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
        isSuccess: false,
        isFailed: true,
      };
    case ADMIN_GET_ALL_VEHICLES_SUCESS:
      return {
        ...state,
        vehicleData: action.payload,
        loading: false,
        isSuccess: false,
        isFailed: true,
        error: '',
      };
    case ADMIN_GET_VEHICLE_BY_ID_FAILED:
      return {
        ...state,
        vehicleById: action.payload,
        loading: false,
        isSuccess: false,
        isFailed: true,
        error: '',
      };
    case ADMIN_GET_VEHICLE_BY_ID_SUCCESS:
      return {
        loading: false,
        isSuccess: false,
        isFailed: true,
        error: action.payload,
      };
    case REQUEST:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
