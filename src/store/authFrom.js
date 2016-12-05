// ----------------------
// Constants
// ----------------------

import {
    CHANGE_FORM,
    SET_AUTH,
    SENDING_REQUEST,
    REQUEST_ERROR,
    CLEAR_ERROR
} from '../actions/constants'
import auth from '../components/Auth'
import socket from '../SocketIO'

// ------------------------------------
// Constants
// ------------------------------------
export const LOCATION_CHANGE = 'LOCATION_CHANGE'

// ------------------------------------
// Reducer
// ------------------------------------
// The initial application state
let initialState = {
  formState: {
    userName: '',
    password: '',
    displayName: ''
  },
  error: '',
  currentlySending: false,
  newUser: true,
  loggedIn: auth.loggedIn()
}

export default function formReducer (state = initialState, action) {
  switch (action.type) {
    case CHANGE_FORM:
      return { ...state, formState: action.newFormState }
    case SET_AUTH:
      return { ...state, loggedIn: action.newAuthState }
    case SENDING_REQUEST:
      return { ...state, currentlySending: action.sending }
    case REQUEST_ERROR:
      return { ...state, error: action.error }
    case CLEAR_ERROR:
      return { ...state, error: '' }
    default:
      return state
  }
}
