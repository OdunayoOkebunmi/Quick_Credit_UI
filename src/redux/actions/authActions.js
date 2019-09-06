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
  },
});
export const authFailed = error => ({
  type: AUTH_FAILED,
  payload: {
    status: 'authenticationFailed',
    error,
    user: {},
    isAuthenticated: false,
  },
});

export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  payload: {
    status: 'authenticationSuccessful',
    error: null,
    user,
    isAuthenticated: true,
  },
});

export const userSignUp = (userData, history) => async (dispatch) => {
  dispatch(authLoading());
  try {
    const response = await API_SERVICE.post('/auth/signup', userData);
    const { data } = response.data;

    localStorage.setItem('jwtToken', data.token);

    setAuthToken(data.token);

    dispatch(setCurrentUser(jwtDecode(data.token)));

    history.push('/');

    toast.dismiss();
    toast.success('Registration successful');
  } catch (err) {
    const { data: { error } } = err.response;

    toast.dismiss();
    toast.error(error, { autoClose: 10000 });

    dispatch(authFailed(error));
  }
};
