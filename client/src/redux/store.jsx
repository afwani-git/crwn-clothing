import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
// import thunk from 'redux-thunk';
import rootReducer from './root-reducer';
import createSagaMiddleware from 'redux-saga';
import { rootSagas } from './root-sagas.jsx';

const sagasMiddlewares = createSagaMiddleware();

const middlewares = [sagasMiddlewares];//change thunk

if(process.env.NODE_ENV === 'development'){
	middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
// run sagas
sagasMiddlewares.run(rootSagas);

export const persistor = persistStore(store);

export default { store, persistStore };
