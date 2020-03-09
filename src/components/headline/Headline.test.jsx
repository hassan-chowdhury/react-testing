import React from 'react';
import { shallow } from 'enzyme';
import Headline from './Headline';
import findByTestAttribute from '../../utils/test';


const setUp = (props = {}) => {
  const { header, desc } = props;
  return shallow(<Headline header={header} desc={desc} />);
};

describe('Headline Component', () => {
  let component;

  describe('Have props', () => {
    beforeEach(() => {
      const props = {
        header: 'Test Header',
        desc: 'Test Description',
      };
      component = setUp(props);
    });

    it('Should render without errors', () => {
      const comp = findByTestAttribute(component, 'headlineComponent');
      expect(comp.length).toBe(1);
    });

    it('Should render a h1', () => {
      const h1 = findByTestAttribute(component, 'header');
      expect(h1.length).toBe(1);
    });

    it('Should render a desc', () => {
      const desc = findByTestAttribute(component, 'desc');
      expect(desc.length).toBe(1);
    });
  });

  describe('Have No props', () => {
    it('Should not render', () => {
      component = setUp();
      const comp = findByTestAttribute(component, 'headlineComponent');
      expect(comp.length).toBe(0);
    });
  });
});
