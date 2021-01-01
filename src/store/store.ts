import { createStore, applyMiddleware, AnyAction, Store } from 'redux'
import { CounterState } from './counter/counterReducer'
import rootReducer from './index'

// LINK 3rd parties
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

const makeConfiguredStore = (reducer: any) =>
  createStore(
    reducer,
    undefined,
    applyMiddleware(thunkMiddleware, ...loggerMiddleware)
  )

/**
 * initStore
 * Initialise and export redux store
 */
const initStore: MakeStore<AppState> = () => {
  const isServer = typeof window === 'undefined'

  if (isServer) {
    return makeConfiguredStore(rootReducer)
  } else {
    const persistConfig = {
      key: 'primary',
      storage,
      whitelist: ['counterReducer'],
    }

    const persistedReducer = persistReducer(persistConfig, rootReducer)

    const store: any = makeConfiguredStore(persistedReducer)

    store.__persistor = persistStore(store)
    return store
  }
}

export const storeWrapper = createWrapper(initStore)
