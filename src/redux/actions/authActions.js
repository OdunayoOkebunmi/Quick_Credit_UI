import { toast } from 'react-toastify';
import jwtDecode from 'jwt-decode';
import API_SERVICE from '@Utils/axiosInstance';
import setAuthToken from '@Utils/setAuthToken';
import { AUTH_FAILED, AUTH_LOADING, SET_CURRENT_USER } from './types';

export const authLoading = () => ({
  type: AUTH_LOADING,
  payload: {
    status: 'authenticationLoading',
    error: null,
    user: {},
    isAuthenticated: false,
    loading: true,
  },
});
export const authFailed = error => ({
  type: AUTH_FAILED,
  payload: {
    status: 'authenticationFailed',
    error,
    user: {},
    isAuthenticated: false,
    loading: false,
  },
});

export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  payload: {
    status: 'authenticationSuccessful',
    error: null,
    user,
    isAuthenticated: true,
    loading: false,
  },
});

export const userSignUp = (userData, history) => async (dispatch) => {
  dispatch(authLoading());
  try {
    const response = await API_SERVICE.post('/auth/signup', userData);
    const { data: { data: { token } } } = response;

    localStorage.setItem('jwtToken', token);

    setAuthToken(token);

    dispatch(setCurrentUser(jwtDecode(token)));

    history.push('/signin');

    toast.dismiss();
    toast.success('Registration successful');
  } catch (err) {
    const { data: { error } } = err.response;

    toast.dismiss();
    toast.error(error, { autoClose: 10000 });

    dispatch(authFailed(error));
  }
};

export const userSignIn = (userData, history) => async (dispatch) => {
  dispatch(authLoading());
  try {
    const response = await API_SERVICE.post('/auth/signin', userData);
    const { data: { data: { token, isAdmin } } } = response;
    const pushLocation = !isAdmin ? 'dashboard' : '/admin-dashboard';

    localStorage.setItem('jwtToken', token);

    setAuthToken(token);

    dispatch(setCurrentUser(jwtDecode(token)));
    history.push(pushLocation);

    toast.dismiss();
    toast.success('Logged In successful');
  } catch (err) {
    const { data: { error } } = err.response;

    toast.dismiss();
    toast.error(error, { autoClose: 10000 });

    dispatch(authFailed(error));
  }
};

export const userLogOut = history => async (dispatch) => {
  localStorage.removeItem('jwtToken');
  setAuthToken(false);
  dispatch(setCurrentUser({}));
  history.push('/');
};
