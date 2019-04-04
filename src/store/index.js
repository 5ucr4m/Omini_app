import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './ducks';
import sagas from './sagas';

const middlewares = [];

// eslint-disable-next-line no-undef
const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

middlewares.push(sagaMiddleware);

// eslint-disable-next-line no-undef
const tronMiddleware = __DEV__ ? console.tron.createEnhancer : () => {};

const store = createStore(
  reducers,
  compose(
    applyMiddleware(...middlewares),
    tronMiddleware(),
  ),
);

sagaMiddleware.run(sagas);

export default store;
