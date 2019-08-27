import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

describe('App', () => {
  it('should render without crashing', () => {
    shallow(<Home />);
  });
});
