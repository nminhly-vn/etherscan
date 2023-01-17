import thunk from 'redux-thunk'
import { persistStore, persistCombineReducers } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'
import { createStore, applyMiddleware, compose } from 'redux'
import { moduleReducers } from '../modules'

const config = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['']
}
const createMiddlewares = thunkMiddleware => {
  const middlewares = []

  // Thunk Middleware
  if (thunkMiddleware) {
    middlewares.push(thunkMiddleware)
  }

  return applyMiddleware.apply({}, middlewares)
}

const createReducers = reducers => {
  return persistCombineReducers(config, {
    ...moduleReducers,
    ...reducers
  })
}
const composeEnhancers = process.env.NODE_ENV !== 'production'
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  : compose
const buildStore = (reducers, initialState) => {
  const store = createStore(createReducers(reducers), initialState, composeEnhancers(createMiddlewares(thunk)))

  const persistor = persistStore(store)
  // persistor.purge()
  if (module.hot) {
    module.hot.accept(() => {
      store.replaceReducer(createReducers(reducers))
    })
  }

  store.reducers = createReducers(reducers)
  return { persistor, store }
}

const store = buildStore()
export default store
