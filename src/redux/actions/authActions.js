/* eslint-disable no-unused-vars */
import { toast } from 'react-toastify';
import jwtDecode from 'jwt-decode';
import API_SERVICE from '@Utils/axiosInstance';
import { setAuthorizationToken } from '@Utils/setAuthToken';
import {
  AUTH_FAILED, AUTH_LOADING, SET_CURRENT_USER, LOGOUT,
} from './types';

export const authLoading = () => ({
  type: AUTH_LOADING,
});
export const authFailed = () => ({
  type: AUTH_FAILED,
});

export const setCurrentUser = decoded => ({
  type: SET_CURRENT_USER,
  payload: decoded,
});

export const logoutUser = () => ({
  type: LOGOUT,
});
export const userSignUp = (userData, history) => async (dispatch) => {
  dispatch(authLoading());
  try {
    const response = await API_SERVICE.post('/auth/signup', userData);
    const {
      data: {
        data: { token },
      },
    } = response;

    localStorage.setItem('jwtToken', token);

    setAuthorizationToken(token);

    dispatch(setCurrentUser(jwtDecode(token)));

    history.push('/signin');

    toast.dismiss();
    toast.success('Registration successful');
  } catch (err) {
    const {
      data: { error },
    } = err.response;
    toast.dismiss();
    toast.error(error, { autoClose: 10000 });

    dispatch(authFailed(error));
  }
};

export const userSignIn = (userData, history) => async (dispatch) => {
  dispatch(authLoading());
  try {
    const response = await API_SERVICE.post('/auth/signin', userData);
    const {
      data: {
        data: { token },
      },
    } = response;
    const {
      payload: { isAdmin },
    } = jwtDecode(token);
    localStorage.setItem('jwtToken', token);

    setAuthorizationToken(token);

    dispatch(setCurrentUser(jwtDecode(token)));
    const pushLocation = !isAdmin ? '/dashboard' : '/admin-dashboard';
    history.push(pushLocation);

    toast.dismiss();
    toast.success('Logged In successful');
  } catch (err) {
    const {
      data: { error },
    } = err.response;

    toast.dismiss();
    toast.error(error, { autoClose: 10000 });

    dispatch(authFailed(error));
  }
};

export const userLogOut = history => (dispatch) => {
  setAuthorizationToken(false);
  dispatch(logoutUser());
  localStorage.removeItem('jwtToken');
  history.push('/');
};
