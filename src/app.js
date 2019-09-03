import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '@Layouts/header/Header';
import store from './redux/store';
import PageNotFound from './components/PageNotFound';


const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Header} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  </Provider>
);
export default App;
