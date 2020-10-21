import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import { logger } from 'redux-logger';

import rootReducer from './root-reducer';

// middleware catches actions and does something and then returns the actions
const middlewares = [];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// created persisted version of the store
export const persistor = persistStore(store);

export default { store, persistor };