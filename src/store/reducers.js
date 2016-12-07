import { combineReducers } from 'redux'
import locationReducer from './location'
import authFormReducer from './authFrom'
import mapPickerReducer from './mapPicker'
import gameInfoReducer from './gameInfo'
import usreInfoReducer from './userInfo'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
    auth: authFormReducer,
    mapPicker: mapPickerReducer,
    gameInfo: gameInfoReducer,
    userInfo: usreInfoReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
