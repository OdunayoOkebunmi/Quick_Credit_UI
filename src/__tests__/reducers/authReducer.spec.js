import {
  authFailed, authLoading, setCurrentUser,
} from '@Actions/authActions';
import { initialState, authReducer } from '@Reducers/authReducer';

let action, newState;

const userData = {
  email: 'janedoe@mail.com',
  password: 'P4ssw0rd',
  firstName: 'Jane',
  lastName: 'Doe',
  address: 'Hogwarts School of Wizardry',
};
const error = 'an error occured';

describe('Auth Reducer', () => {
  it('should return initial state for unknown action types', () => {
    action = { type: null };
    newState = authReducer(initialState, action);
    expect(newState).toEqual(initialState);
    expect(newState.error).toEqual(null);
    expect(newState.status).toEqual('status');
    expect(newState.loading).toEqual(false);
  });
  it('should handle action with type AUTH_LOAING', () => {
    const { type, payload } = authLoading();
    newState = authReducer(initialState, { type, payload });
    expect(type).toEqual('AUTH_LOADING');
    expect(payload.loading).toEqual(true);
  });
  it('should handle action with type AUTH_SUCCESS', () => {
    const { type, payload } = setCurrentUser(userData);
    newState = authReducer(initialState, { type, payload });
    expect(type).toEqual('SET_CURRENT_USER');
    expect(payload.user).toEqual(userData);
    expect(payload.loading).toEqual(false);
  });
  it('should handle action with type AUTH_FAILED', () => {
    const { type, payload } = authFailed(error);
    newState = authReducer(initialState, { type, payload });
    expect(type).toEqual('AUTH_FAILED');
    expect(payload.loading).toEqual(false);
    expect(payload.error).toEqual(error);
  });
});
