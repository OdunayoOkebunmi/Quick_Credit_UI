import {
  actionLoading, actionFailed, createUserLoan, getAllLoans,
} from '@Actions/loanActions';
import { initialState, loanReducer } from '@Reducers/loanReducer';

let action, newState;

const loanData = {
  tenor: 2,
  amount: 11,
  firstName: 'Jane',
  lastName: 'Doe',
  address: 'Hogwarts School of Wizardry',
};
const error = 'an error occured';
const loans = [{
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
}];

describe('Loan Reducer', () => {
  it('should return initial state for unknown action types', () => {
    action = { type: null };
    newState = loanReducer(initialState, action);
    expect(newState).toEqual(initialState);
    expect(newState.error).toEqual(null);
    expect(newState.status).toEqual('status');
    expect(newState.data).toEqual({});
  });
  it('should handle action with type ACTION_LOADING', () => {
    const { type, payload } = actionLoading();
    newState = loanReducer(initialState, { type, payload });
    expect(type).toEqual('ACTION_LOADING');
    expect(payload.status).toEqual('actionLoading');
  });
  it('should handle action with type CREATE_LOAN', () => {
    const { type, payload } = createUserLoan(loanData);
    newState = loanReducer(initialState, { type, payload });
    expect(type).toEqual('CREATE_LOAN');
    expect(payload.data).toEqual(loanData);
    expect(payload.error).toEqual(null);
    expect(payload.status).toEqual('loanCreated');
  });
  it('should handle action with type NOT_LOADING', () => {
    const { type, payload } = actionFailed(error);
    newState = loanReducer(initialState, { type, payload });
    expect(type).toEqual('NOT_LOADING');
    expect(payload.data).toEqual({});
    expect(payload.status).toEqual('actionFailed');
    expect(payload.error).toEqual(error);
  });
  it('should handle action with type  FETCH_LOANS', () => {
    const { type, payload } = getAllLoans(loans);
    newState = loanReducer(initialState, { type, payload });
    expect(type).toEqual('FETCH_LOANS');
    expect(payload.status).toEqual('loansFetched');
    expect(payload.loans).toEqual(loans);
  });
});
