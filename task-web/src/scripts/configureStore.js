import createLogger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';

// import HttpClient from './HttpClient';

const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  applyMiddleware(
    loggerMiddleware
  )
);

export default store;
