import moxios from 'moxios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { instance, API_URL } from '@Utils/axiosInstance';
import { AUTH_LOADING, AUTH_FAILED, SET_CURRENT_USER } from '@Actions/types';
import { userSignUp, userSignIn } from '@Actions/authActions';

const mockStore = configureMockStore([thunk]);
let store = mockStore();
const successResponse = {
  data:
  {
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjoxMiwiZW1haWwiOiJncmFuZ2VyQG1haWwuY29tIiwiaXNBZG1pbiI6ZmFsc2V9LCJpYXQiOjE1Njc3NzUzOTQsImV4cCI6MTU2ODk4NDk5NH0.a5RSWxRiuE0pG32ZtdqtikGxWzjvLz6q6UQ33_O8IAA',
    id: 0,
    firstName: 'Hermione',
    lastName: 'Granger',
    email: 'granger@mail.com',
    address: 'hogwarts school of wizardry',
  },

};
const userData = {
  firstName: 'Hermione',
  lastName: 'Granger',
  email: 'granger@mail.com',
  address: 'hogwarts school of wizardry',
  password: 'P4ssw0rd',
};
const errorResponse = {
  message: 'Registration failed',
};

describe('Register actions', () => {
  beforeEach(() => {
    moxios.install(instance);
    store.clearActions();
  });
  afterEach(() => moxios.uninstall(instance));
  it('should call AUTH_LOADING and SET_CURRENT_USER for a succesful registration', (done) => {
    moxios.stubRequest(`${API_URL}/auth/signup`, {
      status: 201,
      response: successResponse,
    });
    const expectedActions = [
      {
        type: AUTH_LOADING,
        payload: {
          error: null,
          isAuthenticated: false,
          status: 'authenticationLoading',
          user: {},
        },
      },
      {
        type: SET_CURRENT_USER,
        payload: {
          status: 'authenticationSuccessful',
          error: null,
          user: {
            payload: {
              id: 12,
              email: 'granger@mail.com',
              isAdmin: false,
            },
            iat: 1567775394,
            exp: 1568984994,
          },
          isAuthenticated: true,
        },
      },
    ];

    store = mockStore({});
    const history = { push: jest.fn() };
    store.dispatch(userSignUp(userData, history))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });

  it('should call AUTH_LOADING and AUTH_FAILED for a failed registration', (done) => {
    const error = null;
    moxios.stubRequest(`${API_URL}/auth/signup`, {
      status: 400,
      response: errorResponse,
    });
    const expectedActions = [
      {
        type: AUTH_LOADING,
        payload: {
          error: null,
          isAuthenticated: false,
          status: 'authenticationLoading',
          user: {},
        },
      },
      {
        type: AUTH_FAILED,
        payload: {
          status: 'authenticationFailed',
          error,
          user: {},
          isAuthenticated: false,
        },

      },
    ];
    store = mockStore({});
    store.dispatch(userSignUp())
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual(expectedActions[0]);
        expect(actions[0].type).toEqual(expectedActions[0].type);
        done();
      });
  });
});


describe('Login actions', () => {
  beforeEach(() => {
    moxios.install(instance);
    store.clearActions();
  });
  afterEach(() => moxios.uninstall(instance));
  it('should call AUTH_LOADING and SET_CURRENT_USER for a succesful login', (done) => {
    moxios.stubRequest(`${API_URL}/auth/signin`, {
      status: 200,
      response: successResponse,
    });
    const expectedActions = [
      {
        type: AUTH_LOADING,
        payload: {
          error: null,
          isAuthenticated: false,
          status: 'authenticationLoading',
          user: {},
        },
      },
      {
        type: 'SET_CURRENT_USER',
        payload: {
          status: 'authenticationSuccessful',
          error: null,
          user: {
            payload: {
              id: 12,
              email: 'granger@mail.com',
              isAdmin: false,
            },
            exp: 1568984994,
            iat: 1567775394,
          },
          isAuthenticated: true,
        },
      },
    ];

    store = mockStore({});
    const history = { push: jest.fn() };
    store.dispatch(userSignIn(userData, history))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });

  it('should call AUTH_LOADING and AUTH_FAILED for a failed login', (done) => {
    const error = null;
    moxios.stubRequest(`${API_URL}/auth/signin`, {
      status: 400,
      response: errorResponse,
    });
    const expectedActions = [
      {
        type: AUTH_LOADING,
        payload: {
          error: null,
          isAuthenticated: false,
          status: 'authenticationLoading',
          user: {},
        },
      },
      {
        type: AUTH_FAILED,
        payload: {
          status: 'authenticationFailed',
          error,
          user: {},
          isAuthenticated: false,
        },

      },
    ];
    store = mockStore({});
    store.dispatch(userSignIn())
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual(expectedActions[0]);
        expect(actions[0].type).toEqual(expectedActions[0].type);
        done();
      });
  });
});
