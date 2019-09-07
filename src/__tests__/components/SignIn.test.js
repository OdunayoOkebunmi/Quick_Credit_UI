import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { BrowserRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';
import SignIn, { SignInComponent } from '@Layouts/pages/signin/SignIn';

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

describe('<SignIn/>', () => {
  it('should render without crashing', () => {
    mount(
      <Router>
        <SignIn store={store} {...props} />
      </Router>,
    );
  });

  it('Should render along with children component', () => {
    const component = mount(
      <Router>
        <SignIn store={store} {...props} />
      </Router>,
    );
    expect(component.find('button')).toHaveLength(1);
    expect(component.find('input')).toHaveLength(2);
    component.unmount();
  });

  it('should call onChange props for email input', () => {
    const component = mount(
      <Router>
        <SignIn store={store} {...props} />
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
    const handleSignIn = jest.fn();
    const component = mount(
      <Router>
        <SignInComponent store={store} onSubmit={handleSignIn} {...props} />
      </Router>,
    );
    const form = component.find('form');
    form.simulate('submit');
    expect(handleSignIn).toHaveBeenCalledTimes(1);
    component.unmount();
  });
});
