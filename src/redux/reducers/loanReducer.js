import { CREATE_LOAN, ACTION_LOADING, NOT_LOADING } from '@Actions/types';

export const initialState = {
  error: null,
  data: {},
  status: 'status',
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
    default:
      return state;
  }
};
