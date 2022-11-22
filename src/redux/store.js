import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import allReducers from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(sagaMiddleware);

export const store = createStore(allReducers, middleware);

sagaMiddleware.run(rootSaga)