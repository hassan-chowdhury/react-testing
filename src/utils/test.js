import checkPropTypes from 'check-prop-types';
import { applyMiddleware, createStore } from 'redux';
import { middleware } from '../createStore';
import rootReducer from '../reducers';


const findByTestAttribute = (component, attr) => component.find(`[test="${attr}"]`);

const checkProps = (component, expectedProps) => checkPropTypes(component.propTypes, expectedProps, 'props', component.name);

const testStore = (state) => {
  const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
  return createStoreWithMiddleware(rootReducer, state);
};

export { findByTestAttribute, checkProps, testStore };
