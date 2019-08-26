import { combineReducers } from 'redux';
import errorReducer from './errorReducers';

export default combineReducers({
  errors: errorReducer,
});
