import { toast } from 'react-toastify';
import API_SERVICE from '@Utils/axiosInstance';
import { CREATE_LOAN, ACTION_LOADING, NOT_LOADING } from './types';

export const actionLoading = () => ({
  type: ACTION_LOADING,
  payload: {
    status: 'actionLoading',
    error: null,
    data: {},
  },
});
export const createUserLoan = data => ({
  type: CREATE_LOAN,
  payload: {
    status: 'loanCreated',
    error: null,
    data,
  },
});

export const actionFailed = error => ({
  type: NOT_LOADING,
  payload: {
    status: 'actionFailed',
    error,
    data: {},
  },
});
export const createLoan = (details, history) => async (dispatch) => {
  dispatch(actionLoading());
  try {
    const response = await API_SERVICE.post('/loans', details);

    const { data: { data } } = response;
    dispatch(createUserLoan(data));

    history.push('/dashboard');

    toast.dismiss();
    toast.success('Loan Application Successful');
  } catch (errorResponse) {
    const { data: { error } } = errorResponse.response;

    toast.dismiss();
    toast.error(error, { autoClose: 10000 });

    dispatch(actionFailed(error));
  }
};
