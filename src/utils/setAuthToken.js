import axios from 'axios';
import jwtDecode from 'jwt-decode';

const setAuthorizationToken = (token) => {
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common.Authorization;
  }
};

export default setAuthorizationToken;


export const checkAuthorization = (token) => {
  // eslint-disable-next-line no-unused-vars
  let isAuthenticated;
  if (token) {
    isAuthenticated = false;
    const { exp } = jwtDecode(token);
    const currentTimeInSeconds = Date.now() / 1000;
    if (exp > currentTimeInSeconds) {
      isAuthenticated = true;
      return isAuthenticated;
    }
  }
};
