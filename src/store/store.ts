import { createStore, applyMiddleware } from 'redux'
import { CounterState } from './counter/counterReducer'
import rootReducer from './index'

// LINK 3rd parties
import { composeWithDevTools } from 'redux-devtools-extension'
import { createWrapper, MakeStore } from 'next-redux-wrapper'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'

// LINK redux persist
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// ANCHOR combine Reducer interfacce
export interface AppState {
  counterReducer: CounterState
}

// SECTION logger
const loggerMiddleware = [logger]

/**
 * initStore
 * Initialise and export redux store
 */
const initStore: MakeStore<AppState> = () => {
  const persistConfig = {
    key: 'primary',
    storage,
    whitelist: ['counterReducer'],
  }

  const persistedReducer = persistReducer(persistConfig, rootReducer)

  const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware, ...loggerMiddleware))
    // undefined,
    // applyMiddleware(thunkMiddleware, ...loggerMiddleware)
  )

  store.__persistor = persistStore(store)
  return store
}

export const storeWrapper = createWrapper(initStore)
