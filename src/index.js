import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { setCurrentUser, userLogOut } from '@Actions/authActions';
import { setAuthorizationToken } from '@Utils/setAuthToken';
import jwtDecode from 'jwt-decode';
import App from './app';
import store from './redux/store';

if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  const decoded = jwtDecode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));
}

if (localStorage.jwtToken) {
  const decoded = jwtDecode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // eslint-disable-next-line no-return-assign
    const history = { push: () => window.location.href = '/signin' };
    store.dispatch(userLogOut(history));
  }
}
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
