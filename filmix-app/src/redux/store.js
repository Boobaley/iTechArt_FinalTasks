import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/rootReducer';
import createSagaMiddleware from 'redux-saga';
import apiSaga from './sagas/api-sagas';
import { loadingMiddleware } from './middlewares/middleware';

const initialiseSagaMiddleware = createSagaMiddleware();

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    storeEnhancers(
      applyMiddleware(initialiseSagaMiddleware, loadingMiddleware)
    )
);

initialiseSagaMiddleware.run(apiSaga);

export default store; 