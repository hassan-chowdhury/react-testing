import ReduxThunk from 'redux-thunk';
import { applyMiddleware } from 'redux';
import RootReducer from './reducers';


const middleware = [ReduxThunk];

const createStoreWithMiddleware = applyMiddleware(...middleware);

const store = createStoreWithMiddleware(RootReducer);

export { middleware, createStoreWithMiddleware, store };
