import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '@Layouts/header/Header';

describe('Header', () => {
  it('should render without crashing', () => {
    mount(
      <Router>
        <Header />
      </Router>,
    );
  });
});
