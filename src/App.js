import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import './app.scss';

const App = () => (
  <Provider store={store}>
    <div className="app">
      Welcome to Quick Credit!
    </div>
  </Provider>
);
export default App;
