import {
  NEW_QUESTION,
  SEND_ANWSER
} from '../actions/constants'
// ------------------------------------
// Reducer
// ------------------------------------
// The initial application state
let initialState = {
  isSended: true,
  markers: [],
  circleDistance: [],
  correctMarker: [],
  timeLeft: 20,
  startIn: 5,
  gameStatus: 'Bắt đầu',
  needReRender: false,
  timeOut: 10
}

export default function mapPickerReducer (state = initialState, action) {
  switch (action.type) {
    case NEW_QUESTION:
      return {...state, isSended: action.newIsSended}
    case SEND_ANWSER:
      return {...state, isSended: action.newIsSended}
    default:
      return state
  }
}
