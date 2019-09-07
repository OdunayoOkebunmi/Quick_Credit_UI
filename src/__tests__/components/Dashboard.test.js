import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import Dashboard from '@Layouts/pages/dashboard/Dashboard';

describe('Dashboard', () => {
  it('should render without crashing', () => {
    mount(
      <Router>
        <Dashboard />
      </Router>,
    );
  });
});
