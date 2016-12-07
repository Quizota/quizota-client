import {
  BOARD_STATUS
} from '../actions/constants'
let _boardStatus = `idle`
// ------------------------------------
// Reducer
// ------------------------------------
// The initial application state

let initialState = {
  boardStatus: `idle`,
  myGameInfo: {
    score: 0,
    userName: 'Hoi'
  },
  vsGameInfo: {
    score: 0,
    userName: 'Phuong'
  }
}

export default function gameInfoReducer (state = initialState, action) {
  switch (action.type) {
    case BOARD_STATUS:
      let gameAction = action.data
      let gameStatus = ['playerJoinBoardSuccess', 'newPlayerJoinBoard', 'waitingStartGame', 'startGame', 'endGame']
      let inGameStatus = ['syncGameData', 'processActionSuccess']
      if (gameStatus.includes(gameAction)) {
        _boardStatus = action.data
      } else if (inGameStatus.includes(action.data)) {
        _boardStatus = `inGame`
      }
      return Object.assign({}, state, {
        boardStatus: _boardStatus
      })
    default:
      return state
  }
}
