import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducers from '../reducers';

const middleware = [thunk];
const initialState = {};
const store = createStore(
  rootReducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);
export default store;
