import ReduxThunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import RootReducer from './reducers';


const middleware = [ReduxThunk];

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);

const store = createStoreWithMiddleware(RootReducer);

export { middleware, createStoreWithMiddleware, store };
