import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';
import PageNotFound from './PageNotFound';

describe('Home', () => {
  it('should render without crashing', () => {
    shallow(<Home />);
  });
});

describe('PageNOtFound', () => {
  it('should render without crashing', () => {
    shallow(<PageNotFound />);
  });
});