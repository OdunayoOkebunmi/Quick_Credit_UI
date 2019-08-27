/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import App from '../app';


describe('App', () => {
  it('should render without crashing', () => {
    shallow(<App />);
  });
});
