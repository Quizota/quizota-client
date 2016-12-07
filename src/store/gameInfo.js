import {
  BOARD_STATUS
} from '../actions/constants'
// ------------------------------------
// Reducer
// ------------------------------------
// The initial application state

let initialState = {
  boardStatus: `idle`,

}

export default function gameInfoReducer (state = initialState, action) {
  switch (action.type) {
    case BOARD_STATUS:
      let gameAction = action.data
      let gameStatus = [" playerJoinBoardSuccess", "newPlayerJoinBoard", "waitingStartGame", "startGame", "endGame"]
      let inGameStatus = ["syncGameData", "processActionSuccess"]
      if (gameStatus.includes(gameAction)) {
        return Object.assign({}, state, {
          boardStatus: action.data
        })
      } else if (inGameStatus.includes(action.data)) {
        return Object.assign({}, state, {
          boardStatus: `inGame`
        })
      }
    default:
      return state
  }
}
