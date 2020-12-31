import { combineReducers, AnyAction, Reducer } from 'redux'
import { HYDRATE } from 'next-redux-wrapper'

// LINK import reducer modules
import { counterReducer, CounterState } from './counter/counterReducer'

// ANCHOR combine Reducer interfacce
export interface AppState {
  counterReducer: CounterState
}

const combinedReducers = combineReducers({ counterReducer })

const rootReducer: Reducer<AppState, AnyAction> = (state, action) => {
  if (action.type === HYDRATE) {
    /* client state will be overwritten
     * by server or static state hydation.
     * Implement state preservation as needed.
     * see: https://github.com/kirill-konshin/next-redux-wrapper#server-and-client-state-separation
     */
    const nextState = {
      ...state,
      ...action.payload,
    }
    return nextState
  }
  return combinedReducers(state, action)
}

export default rootReducer
