import {
  BOARD_STATUS,
  IN_GAME
} from '../actions/constants'
let _boardStatus = `idle`
// ------------------------------------
// Reducer
// ------------------------------------
// The initial application state

let initialState = {
  boardStatus: `idle`,
  players: []
}

export default function gameInfoReducer (state = initialState, action) {
  var gameAction = action.data
  let gameStatus = ['playerJoinBoardSuccess', 'newPlayerJoinBoard', 'waitingStartGame', 'startGame', 'endGame']
  let inGameStatus = ['syncGameData', 'processActionSuccess']
  switch (action.type) {
    case BOARD_STATUS:
      if (gameStatus.includes(gameAction)) {
        _boardStatus = action.data
      } else if (inGameStatus.includes(action.data)) {
        _boardStatus = `inGame`
      }
      return { ...state, boardStatus: _boardStatus }
    case IN_GAME:
      console.log('go IN_GAME')
      return { ...state,
        players: action.data.players
      }
    default:
      return state
  }
}
