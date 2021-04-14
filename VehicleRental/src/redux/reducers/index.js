import {combineReducers} from 'redux';

import LoginReducer from './login';
import RegisterReducer from './register';
import AdminVehicleReducer from './admin/adminVehicle';

export default combineReducers({
  login: LoginReducer,
  register: RegisterReducer,
  adminVehicle: AdminVehicleReducer,
});
