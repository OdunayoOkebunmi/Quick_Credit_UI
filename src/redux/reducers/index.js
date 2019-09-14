import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { loanReducer } from './loanReducer';

export default combineReducers({
  auth: authReducer,
  loans: loanReducer,
});
