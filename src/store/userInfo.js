import {
  USER_INFO
} from '../actions/constants'
// ------------------------------------
// Reducer
// ------------------------------------
// The initial application state

let initialState = {
  profile: {
    password: ``,
    displayName: ``,
    userName: ``,
    _id: ``,
    __v: 0,
    exp: 0,
    isDefined: false,
    achievements: [],
    elo: 0,
    level: 0,
    gameUnlocked: [],
    avatar: "images/avatar/default.png"
  },
  gameList: []
}

export default function userInfoReducer (state = initialState, action) {
  switch (action.type) {
    case USER_INFO:
      let userProfile = action.data.profile
      let gameList = action.data.gameList
      return Object.assign({}, state, {
        profile: {
          password: userProfile.password,
          displayName: userProfile.displayName,
          userName: userProfile.userName,
          _id: userProfile._id,
          __v: userProfile.__v,
          exp: userProfile.exp,
          isDefined: userProfile.isDefined,
          achievements: userProfile.achievements,
          elo: userProfile.elo,
          level: userProfile.level,
          gameUnlocked: userProfile.gameUnlocked,
          avatar: userProfile.avatar
        },
        gameList: gameList
      })
    default:
      return state
  }
}
