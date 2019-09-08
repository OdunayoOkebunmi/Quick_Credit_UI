import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { mount, shallow } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import Dashboard from '@Layouts/pages/dashboard/Dashboard';
import DashboardHeader from '@Common/dashboard/DashboardHeader';
import DashboardSidebar from '@Common/dashboard/DashboardSidebar';
import MainContent from '@Layouts/pages/dashboard/MainContent';


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

describe('<DashboardSidebar/>', () => {
  it('should render without crashing', () => {
    const component = shallow(
      <Router>
        <Dashboard store={store} {...props} />
      </Router>,
    );
    expect(component).toMatchSnapshot();
  });
});
it('should render without crashing', () => {
  mount(
    <Router>
      <MainContent />
    </Router>,
  );
});
describe('<DashboardSidebar/>', () => {
  it('should render without crashing', () => {
    mount(
      <Router>
        <DashboardHeader />
      </Router>,
    );
  });
});
describe('<DashboardSidebar/>', () => {
  it('should render without crashing', () => {
    mount(
      <Router>
        <DashboardSidebar store={store} {...props} />
      </Router>,
    );
  });
  it(' should call onSubmit prop function when form is submitted', () => {
    const logOut = jest.fn();
    const component = mount(
      <Router>
        <DashboardSidebar store={store} onClick={logOut} {...props} />
      </Router>,
    );
    const form = component.find('Link').at(2);
    form.simulate('click');
    expect(logOut).toHaveBeenCalledTimes(0);
    component.unmount();
  });
});
