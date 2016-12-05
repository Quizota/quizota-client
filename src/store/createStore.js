import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { browserHistory } from 'react-router'
import makeRootReducer from './reducers'
import { updateLocation } from './location'
import createSagaMiddleware from 'redux-saga'
import createLogger from 'redux-logger'
import rootQZT from '../components/QZT'

let sagaMiddleware = createSagaMiddleware()

let logger = createLogger({
    // Ignore `CHANGE_FORM` actions in the logger, since they fire after every keystroke
  predicate: (getState, action) => action.type !== 'CHANGE_FORM'
})
export default (initialState = {}) => {
    // ======================================================
    // Middleware Configuration
    // ======================================================
  const middleware = [thunk, sagaMiddleware, logger]

    // ======================================================
    // Store Enhancers
    // ======================================================
  const enhancers = []
  if (__DEV__) {
    const devToolsExtension = window.devToolsExtension
    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension())
    }
  }

    // ======================================================
    // Store Instantiation and HMR Setup
    // ======================================================
  const store = createStore(
        makeRootReducer(),
        initialState,
        compose(
            applyMiddleware(thunk, logger, sagaMiddleware),
            ...enhancers
        ),
    )
  sagaMiddleware.run(rootQZT)

  store.asyncReducers = {}

    // To unsubscribe, invoke `store.unsubscribeHistory()` anytime
  store.unsubscribeHistory = browserHistory.listen(updateLocation(store))

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const reducers = require('./reducers').default
      store.replaceReducer(reducers(store.asyncReducers))
    })
  }

  return store
}
