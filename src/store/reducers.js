import { combineReducers } from 'redux'
import locationReducer from './location'
import authFormReducer from './authFrom'
import mapPickerReducer from './mapPicker'

export const makeRootReducer = (asyncReducers) => {
    return combineReducers({
        location: locationReducer,
        auth: authFormReducer,
        mapPicker: mapPickerReducer,
        ...asyncReducers
    })
}

export const injectReducer = (store, { key, reducer }) => {
    
    if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

    store.asyncReducers[key] = reducer
    store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
