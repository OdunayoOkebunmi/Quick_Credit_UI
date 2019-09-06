import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { BrowserRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';
import SignUp, { SignUpComponent } from '@Layouts/pages/signup/SignUp';

const initialState = {
  auth: {
    error: null,
    user: {},
    isAuthenticated: false,
    status: 'status',
  },
};
const props = {
  history: {
    push: jest.fn(),
  },
};
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore(initialState);

describe('<SignUp/>', () => {
  it('should render without crashing', () => {
    mount(<SignUp store={store} {...props} />);
  });

  it('Should render along with children component', () => {
    const component = mount(
      <Router>
        <SignUp store={store} {...props} />
      </Router>,
    );
    expect(component.find('button')).toHaveLength(1);
    expect(component.find('input')).toHaveLength(5);
    component.unmount();
  });

  it('should call onChange props for email input', () => {
    const component = mount(
      <Router>
        <SignUp store={store} {...props} />
      </Router>,
    );
    const emailInput = component.find('input[type="email"]');
    emailInput.simulate('change', {
      persist: () => { },
      target: {
        name: 'email',
        value: 'jandoe@test.com',
      },
    });
    expect(component.find('input[type="email"]').length).toEqual(1);
    expect(emailInput.html()).toMatch('jandoe@test.com');
    component.unmount();
  });
  it(' should call onSubmit prop function when form is submitted', () => {
    const handleSignUp = jest.fn();
    const component = mount(
      <Router>
        <SignUpComponent store={store} onSubmit={handleSignUp} {...props} />
      </Router>,
    );
    const form = component.find('form');
    form.simulate('submit');
    expect(handleSignUp).toHaveBeenCalledTimes(1);
    component.unmount();
  });
});
