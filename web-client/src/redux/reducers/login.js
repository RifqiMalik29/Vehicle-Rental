import {
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from "../constants";

const initialState = {
  token: "",
  loading: false,
  isLogin: false,
  error: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload,
        loading: false,
        isLogin: true,
        error: "",
      };
    case LOGIN_FAILED:
      return {
        ...state,
        token: "",
        loading: false,
        isLogin: false,
        error: action.payload.message,
      };
    case LOGOUT:
      return {
        ...state,
        token: "",
        loading: false,
        isLogin: false,
        error: "",
      };
    default:
      return state;
  }
};
