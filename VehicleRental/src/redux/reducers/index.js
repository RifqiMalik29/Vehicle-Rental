import {combineReducers} from 'redux';

import LoginReducer from './login';
import RegisterReducer from './register';

export default combineReducers({
  login: LoginReducer,
  register: RegisterReducer,
});
