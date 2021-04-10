import {REQUEST, REGISTER_FAILED, REGISTER_SUCCESS} from '../constants';

const initialState = {
  loading: false,
  isSuccess: false,
  isFailed: false,
  registerStatus: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_FAILED:
      return {
        ...state,
        loading: false,
        isSuccess: false,
        isFailed: true,
        message: action.payload,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        isSuccess: true,
        isFailed: false,
        message: action.payload,
      };
    default:
      return state;
  }
};
