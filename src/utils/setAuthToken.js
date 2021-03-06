import axios from 'axios';
import jwtDecode from 'jwt-decode';

// export const setAuthorizationToken = (token) => {
//   if (token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   } else {
//     delete axios.defaults.headers.common.Authorization;
//   }
// };
const instance = axios.create({
  baseURL: process.env.API_URL,
});

export const setAuthorizationToken = (token) => {
  if (!token) {
    delete instance.defaults.headers.common.Authorization;
  }
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export const checkAuthorization = (token) => {
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

export const checkUserType = (token) => {
  if (token) {
    const { payload: { isAdmin } } = jwtDecode(token);
    return isAdmin;
  }
};
