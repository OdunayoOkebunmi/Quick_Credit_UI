import axios from 'axios';

export const API_URL = process.env.NODE_ENV === 'development'
  ? 'http://localhost:3000/api/v1'
  : 'https://quick-credit-backend.herokuapp.com/api/v1';

export const instance = axios.create({
  baseURL: API_URL,
});

const token = localStorage.getItem('jwtToken');

if (token) {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
}

const API_SERVICE = {
  get(endpoint) {
    return instance.get(endpoint);
  },

  post(endpoint, data) {
    return instance.post(endpoint, data);
  },

  patch(endpoint, data) {
    return instance.patch(endpoint, data);
  },

  delete(endpoint) {
    return instance.delete(endpoint);
  },
};

export default API_SERVICE;
