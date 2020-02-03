
import {
  AUTH_LOADING, AUTH_FAILED, SET_CURRENT_USER, LOGOUT,
} from '../actions/types';

export const initialState = {
  authenticating: false,
  isAuthenticated: false,
  user: {},
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTH_LOADING:
      return {
        ...state,
        authenticating: true,
      };
    case AUTH_FAILED:
      return {
        ...state,
        authenticating: false,
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        authenticating: false,
        isAuthenticated: true,
        user: payload,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: {},
        authenticating: false,
      };
    default:
      return state;
  }
};
