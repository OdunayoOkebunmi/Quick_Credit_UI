/* eslint-disable no-console */

import { checkAuthorization, checkUserType } from '@Utils/setAuthToken';
import { AUTH_LOADING, AUTH_FAILED, SET_CURRENT_USER } from '../actions/types';

const token = localStorage.getItem('jwtToken');
const isAuthenticated = checkAuthorization(token);
const isAdmin = checkUserType(token);

export const initialState = {
  error: null,
  user: { isAdmin },
  isAuthenticated,
  status: 'status',
  loading: false,

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
        user: { ...state.user },
        isAuthenticated: payload.isAuthenticated,
        status: payload.status,
      };
    default:
      return state;
  }
};
