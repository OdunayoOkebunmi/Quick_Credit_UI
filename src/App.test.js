/* eslint-disable import/extensions */
/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import App from './app.js';

describe('App', () => {
  it('should render without crashing', () => {
    shallow(<App />);
  });
});
