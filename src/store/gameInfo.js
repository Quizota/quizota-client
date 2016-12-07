import {
  BOARD_STATUS
} from '../actions/constants'
// ------------------------------------
// Reducer
// ------------------------------------
// The initial application state

let initialState = {
  boardStatus: `idle`
}

export default function gameInfoReducer (state = initialState, action) {
  switch (action.type) {
    case BOARD_STATUS:
      return Object.assign({}, state, {
        boardStatus: action.data
      })
    default:
      return state
  }
}
