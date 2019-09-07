import '@babel/polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
// import { PrivateRoutes } from '@Common/private-routes/PrivateRoutes';
import Home from '@Pages/home/Home';
import SignUp from '@Pages/signup/SignUp';
import SignIn from '@Pages/signin/SignIn';
import Dashboard from '@Pages/dashboard/Dashboard';
import store from './redux/store';
import PageNotFound from './components/PageNotFound';
import 'react-toastify/dist/ReactToastify.css';

const App = () => (
  <Provider store={store}>
    <ToastContainer />
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  </Provider>
);
export default App;
