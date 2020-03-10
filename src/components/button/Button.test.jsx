import React from 'react';
import { shallow } from 'enzyme';
import SharedButton from './Button';
import { findByTestAttribute, checkProps } from '../../utils/test';


describe('SharedButton Component', () => {
  describe('Checking PropTypes', () => {
    it('Should not throw a warning', () => {
      const expectedProps = {
        buttonText: 'Example Button Text',
        emitEvent: () => {

        },
      };
      const propsError = checkProps(SharedButton, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe('Renders', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        buttonText: 'Example Button Text',
        emitEvent: () => {

        },
      };
      wrapper = shallow(<SharedButton buttonText={props.buttonText} emitEvent={props.emitEvent} />);
    });

    it('Should Render a button', () => {
      const button = findByTestAttribute(wrapper, 'buttonComponent');
      expect(button.length).toBe(1);
    });
  });
});
