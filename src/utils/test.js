import checkPropTypes from 'check-prop-types';

const findByTestAttribute = (component, attr) => component.find(`[test="${attr}"]`);

const checkProps = (component, expectedProps) => checkPropTypes(component.propTypes, expectedProps, 'props', component.name);

export { findByTestAttribute, checkProps };
