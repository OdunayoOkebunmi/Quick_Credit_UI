import React from 'react';
import { shallow, mount } from 'enzyme';
import LoanCalculator from '@Layouts/loan-calculator/LoanCalculator';

describe('Home', () => {
  it('should render without crashing', () => {
    mount(<LoanCalculator />);
  });
});

describe('Loan Calculator', () => {
  let mountedComponent;
  let props;
  const loanCalculator = () => {
    if (!mountedComponent) {
      mountedComponent = shallow(
        <LoanCalculator {...props} />,
      );
    }
    return mountedComponent;
  };
  beforeEach(() => {
    props = {
      placeholder: 'some text',
      name: 'name',
      value: 23,
      error: 'some error',
      type: 'number',
      handleInputChange: jest.fn(),
    };
  });
  it('should mount with handleInputChange()', () => {
    const event = { target: {} };
    const onChangeSpy = jest.spyOn(loanCalculator().instance(), 'handleInputChange');
    loanCalculator().instance().handleInputChange(event);
    expect(onChangeSpy).toHaveBeenCalledTimes(1);
  });
  it('should mount with handleFormSubmit()', () => {
    const event = { preventDefault: jest.fn() };
    const onFormSubmit = jest.spyOn(loanCalculator().instance(), 'handleFormSubmit');
    loanCalculator().instance().handleFormSubmit(event);
    expect(onFormSubmit).toHaveBeenCalledTimes(1);
  });
});
