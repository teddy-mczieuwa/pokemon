import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { reducers } from "./reducers";
import {rootSaga} from "./sagas"
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  compose(
    applyMiddleware(sagaMiddleware),
    // @ts-ignore
    // prettier-ignore
    process.env.NODE_ENV !== "production" && typeof window !== 'undefined' && window["__REDUX_DEVTOOLS_EXTENSION__"] ? window["__REDUX_DEVTOOLS_EXTENSION__"]() : f => f
  )
);
 // @ts-ignore
sagaMiddleware.run(rootSaga, store.dispatch);

export default store;
