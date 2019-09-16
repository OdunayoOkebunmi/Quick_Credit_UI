import {
  CREATE_LOAN, ACTION_LOADING, NOT_LOADING, FETCH_LOANS,
} from '@Actions/types';

export const initialState = {
  error: null,
  data: {},
  status: 'status',
  loans: [],
};

export const loanReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_LOADING:
      return {
        ...state,
        status: payload.status,
      };
    case NOT_LOADING:
      return {
        ...state,
        error: payload.error,
        status: payload.status,

      };
    case CREATE_LOAN:
      return {
        ...state,
        data: payload.data,
        status: payload.status,
      };
    case FETCH_LOANS:
      return {
        ...state,
        loans: payload.loans,
        status: payload.status,
      };
    default:
      return state;
  }
};
