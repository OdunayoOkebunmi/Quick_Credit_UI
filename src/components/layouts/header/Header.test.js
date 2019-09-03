import React from 'react';
import { mount } from 'enzyme';
import Header from './Header';

describe('Home', () => {
  it('should render without crashing', () => {
    mount(<Header />);
  });
});
