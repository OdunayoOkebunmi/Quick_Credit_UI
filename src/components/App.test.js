import React from 'react';
import { shallow } from 'enzyme';
import PageNotFound from './PageNotFound';

describe('PageNotFound', () => {
  it('should render without crashing', () => {
    shallow(<PageNotFound />);
  });
});
