import React from 'react';
import { mount } from 'enzyme';
import Header from '@Layouts/header/Header';

describe('Header', () => {
  it('should render without crashing', () => {
    mount(<Header />);
  });
});
