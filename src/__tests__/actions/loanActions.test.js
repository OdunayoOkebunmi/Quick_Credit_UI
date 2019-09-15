import moxios from 'moxios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { instance, API_URL } from '@Utils/axiosInstance';
import { CREATE_LOAN, ACTION_LOADING, NOT_LOADING } from '@Actions/types';
import { createLoan } from '@Actions/loanActions';

const mockStore = configureMockStore([thunk]);
let store = mockStore();
const successResponse = {
  data:
  {
    loanId: 0,
    id: 0,
    user: 'Jane Doe',
    status: 'pending',
    repaid: false,
    tenor: 2,
    amount: 5000,
    paymentInstallments: 0,
    balance: 0,
    interest: 0,
  },

};
const loanData = {
  firstName: 'Hermione',
  lastName: 'Granger',
  tenor: 2,
  amount: 5000,
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
  it('should call AUTH_LOADING and SET_CURRENT_USER for a succesful loan application', (done) => {
    moxios.stubRequest(`${API_URL}/loans`, {
      status: 201,
      response: successResponse,
    });
    const expectedActions = [
      {
        type: ACTION_LOADING,
        payload: {
          status: 'actionLoading',
          error: null,
          data: {},
        },
      },
      {
        type: CREATE_LOAN,
        payload: {
          status: 'loanCreated',
          error: null,
          data: {
            balance: 0,
            id: 0,
            interest: 0,
            loanId: 0,
            status: 'pending',
            paymentInstallments: 0,
            repaid: false,
            tenor: 2,
            amount: 5000,
            user: 'Jane Doe',
          },
        },
      },
    ];

    store = mockStore({});
    const history = { push: jest.fn() };
    store.dispatch(createLoan(loanData, history))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });

  it('should call AUTH_LOADING and AUTH_FAILED for a failed registration', async (done) => {
    const error = null;
    moxios.stubRequest(`${API_URL}/loans`, {
      status: 400,
      response: errorResponse,
    });
    const expectedActions = [
      {
        type: ACTION_LOADING,
        payload: {
          status: 'actionLoading',
          error: null,
          data: {},
        },
      },
      {
        type: NOT_LOADING,
        payload: {
          status: 'actionFailed',
          error,
          data: {},

        },

      },
    ];
    store = mockStore({});
    await store.dispatch(createLoan())
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual(expectedActions[0]);
        expect(actions[0].type).toEqual(expectedActions[0].type);
        done();
      });
  });
});
