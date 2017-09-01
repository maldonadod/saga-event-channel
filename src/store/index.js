import {compose,createStore,applyMiddleware} from 'redux'
import rootReducer from '../reducers'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas'

const sagaMiddleware = createSagaMiddleware()
const enhancer = compose(
  applyMiddleware(sagaMiddleware)
);
const store = createStore(rootReducer, enhancer)
sagaMiddleware.run(rootSaga)

export default store
