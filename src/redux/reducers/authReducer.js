import { AUTH_LOADING, AUTH_FAILED, SET_CURRENT_USER } from '../actions/types';

export const initialState = {
  error: null,
  user: {},
  isAuthenticated: false,
  status: 'status',
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTH_LOADING:
      return {
        ...state,
        status: payload.status,
      };
    case AUTH_FAILED:
      return {
        ...state,
        error: payload.error,
        status: payload.status,

      };
    case SET_CURRENT_USER:
      return {
        ...state,
        user: payload.user,
        isAuthenticated: payload.isAuthenticated,
        status: payload.status,
      };
    default:
      return state;
  }
};
