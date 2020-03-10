import React from 'react';
import { shallow } from 'enzyme';
import ListItem from './ListItem';
import { findByTestAttribute, checkProps } from '../../utils/test';


describe('ListItem Component', () => {
  describe('Checking PropTypes', () => {
    it('Should not throw a warning', () => {
      const expectedProps = {
        title: 'Example Title',
        desc: 'Example Description',
      };
      const propsError = checkProps(ListItem, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe('Component Renders', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        title: 'Example Title',
        desc: 'Example description',
      };
      wrapper = shallow(<ListItem title={props.title} desc={props.desc} />);
    });

    it('Should render without errors', () => {
      const component = findByTestAttribute(wrapper, 'listItemComponent');
      expect(component.length).toBe(1);
    });

    it('Should render a title', () => {
      const component = findByTestAttribute(wrapper, 'componentTitle');
      expect(component.length).toBe(1);
    });

    it('Should render a description', () => {
      const component = findByTestAttribute(wrapper, 'componentDescription');
      expect(component.length).toBe(1);
    });
  });

  describe('Component does not render', () => {
    it('Should not render', () => {
      const props = {
        desc: 'Example description',
      };
      const wrapper = shallow(<ListItem desc={props.desc} />);
      const component = findByTestAttribute(wrapper, 'listItemComponent');
      expect(component.length).toBe(0);
    });
  });
});
