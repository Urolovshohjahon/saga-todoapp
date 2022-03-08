import { applyMiddleware, compose, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { batch } from "react-redux";
import reducer from "./reducers";
import createSagaMiddleware from 'redux-saga';
import { AsyncStorage } from 'react-native';
import sagas from './sagas';

export default () => {

    /* ------------- Redux Configuration ------------- */

    const persistConfig = {
        key: 'root',
        storage: AsyncStorage,
        whitelist: ['task', 'profile']
    };

    const middleware = [];
    const enhancers = [];

    /* ------------- Saga Middleware ------------- */
    const sagaMiddleware = createSagaMiddleware({
        effectMiddlewares: [
            (next) => (effect) => {
                if (effect?.type === "ALL") {
                    batch(() => next(effect));
                    return;
                }
                next(effect);
            },
        ],
    });
    middleware.push(sagaMiddleware);
    // middleware.push(logger)

    /* ------------- Assemble Middleware ------------- */
    const pReducer = persistReducer(persistConfig, reducer);

    enhancers.push(applyMiddleware(...middleware));
    // const store = createStore(pReducer, compose(...enhancers))
    const store = createStore(pReducer, compose(...enhancers));
    // kick off root saga

    sagaMiddleware.run(sagas);
    const persistor = persistStore(store);

    return { store, persistor }
}