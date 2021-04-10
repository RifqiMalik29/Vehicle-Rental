import {REQUEST, LOGIN_FAILED, LOGIN_SUCCESS, LOGOUT} from '../constants';

const initialState = {
  token: '',
  loading: false,
  isLogin: false,
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        token: '',
        loading: false,
        isLogin: false,
        error: action.payload,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload,
        loading: false,
        isLogin: true,
        error: '',
      };
    case LOGOUT:
      return {
        ...state,
        token: '',
        loading: false,
        isLogin: false,
        error: '',
      };
    default:
      return state;
  }
};
