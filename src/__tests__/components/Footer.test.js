import React from 'react';
import { shallow } from 'enzyme';
import Footer from '@Layouts/footer/Footer';

describe('Header', () => {
  it('should render without crashing', () => {
    shallow(<Footer />);
  });
});
