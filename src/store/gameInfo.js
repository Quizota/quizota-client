import {
  BOARD_STATUS,
  IN_GAME,
  GAME_ACTIVITY,
  END_GAME_SESSION
} from '../actions/constants'
let _boardStatus = `idle`

let users
let localStorage

// If we're testing, use a local storage polyfill
if (global.process && process.env.NODE_ENV === 'test') {
  localStorage = require('localStorage')
} else {
  // If not, use the browser one
  localStorage = global.window.localStorage
}


let localUserData = JSON.parse(localStorage.users)
console.log('localUserData', localUserData)
// ------------------------------------
// Reducer
// ------------------------------------
// The initial application state

let initialState = {
  boardStatus: `idle`,
  players: [{
    "displayName": "",
    "elo": 0,
  }, {
    "displayName": "",
    "elo": 0,
  }],
  myScore: {
    "score": 0
  },
  vsScore: {
    "score": 0
  },
  myScorePercentage: {},
  vsScorePercentage: {},
  endGameInfo: {
    point: 920,
    elo: 1300,
    eloAdded: 13
  }
}

export default function gameInfoReducer (state = initialState, action) {
  var gameAction = action.data
  let gameStatus = ['playerJoinBoardSuccess', 'newPlayerJoinBoard', 'waitingStartGame', 'startGame', 'endGame']
  let inGameStatus = ['syncGameData', 'processActionSuccess']
  const userInfo = localUserData
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
    case GAME_ACTIVITY:
      if (action.data.userName === userInfo["userName"]) {
        let cssTrans = {
          transform: `translate(${action.data.score/10 - 100}%, 0%) matrix(1, 0, 0, 1, 0, 0)`
        }
        return { ...state,
          myScore: action.data,
          myScorePercentage: cssTrans
        }
      } else {
        let cssTrans = {
          transform: `translate(${100 - action.data.score/10}%, 0%) matrix(1, 0, 0, 1, 0, 0)`
        }
        console.log(cssTrans)
        return { ...state,
          vsScore: action.data,
          vsScorePercentage: cssTrans
        }
      }
    case END_GAME_SESSION:
      console.log(`go END_GAME_SESSION`)
      return { ...state,
        myScore: {},
        vsScore: {},
        vsScorePercentage: {},
        vsScorePercentage: {},
      }
    default:
      return state
  }
}
