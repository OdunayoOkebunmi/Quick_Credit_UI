import '@babel/polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from '@Pages/home/Home';
import SignUp from '@Pages/signup/SignUp';
import store from './redux/store';
import PageNotFound from './components/PageNotFound';
import '@Common/_react-toastify.scss';

const App = () => (
  <Provider store={store}>
    <ToastContainer />
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignUp} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  </Provider>
);
export default App;
