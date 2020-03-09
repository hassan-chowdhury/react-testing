import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import { findByTestAttribute } from '../../utils/test';


describe('Header Component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<Header />);
  });

  it('Should render without errors', () => {
    expect(findByTestAttribute(component, 'headerComponent').length).toBe(1);
  });

  it('Should render logo', () => {
    expect(findByTestAttribute(component, 'logoIMG').length).toBe(1);
  });
});
