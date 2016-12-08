import {
  CHANGE_FORM,
  SET_AUTH,
  SENDING_REQUEST,
  LOGIN_REQUEST,
  REGISTER_REQUEST,
  LOGOUT,
  REQUEST_ERROR,
  CLEAR_ERROR,
  USER_INFO,
  IN_GAME,
  GAME_ACTIVITY,
  END_GAME_SESSION,
  END_GAME_RESULT
} from './constants'

const SOCKET_IO_MESSAGE = 'SOCKET_IO_MESSAGE'
import { IndexLink, Link, browserHistory } from 'react-router'
import { emitData } from '../SocketIO'

/**
 * Sets the form state
 * @param {object} newFormState
 * @param {string} newFormState.username
 * @param {string} newFormState.password
 */
export function changeForm (newFormState) {
  return { type: CHANGE_FORM, newFormState }
}

/**
 * Sets the authentication state of the application
 * @param  {boolean} newAuthState True means a user is logged in, false means no user is logged in
 */
export function setAuthState (newAuthState) {
  return { type: SET_AUTH, newAuthState }
}

/**
 * Sets the `currentlySending` state, which displays a loading indicator during requests
 * @param  {boolean} sending True means we're sending a request, false means we're not
 */
export function sendingRequest (sending) {
  return { type: SENDING_REQUEST, sending }
}

/**
 * Tells the app we want to log in a user
 * @param  {object} data          The data we're sending for log in
 * @param  {string} data.username The username of the user to log in
 * @param  {string} data.password The password of the user to log in
 */
export function loginRequest (data) {
  return { type: LOGIN_REQUEST, data }
}

/**
 * Tells the app we want to log out a user
 */
export function logout () {
  return { type: LOGOUT }
}

/**
 * Tells the app we want to register a user
 * @param  {object} data          The data we're sending for registration
 * @param  {string} data.username The username of the user to register
 * @param  {string} data.password The password of the user to register
 */
export function registerRequest (data) {
  return { type: REGISTER_REQUEST, data }
}

/**
 * Sets the `error` state to the error received
 * @param  {object} error The error we got when trying to make the request
 */
export function requestError (error) {
  return { type: REQUEST_ERROR, error }
}

/**
 * Sets the `error` state as empty
 */
export function clearError () {
  return { type: CLEAR_ERROR }
}

export function handleSocket () {
  return function (dispatch, state) {
    socket.setHandler(function (resData) {
      console.log('Handle Socket code:', resData.code)
    })
  }
}

function handleNewQuestion (questionData) {
  return {
    type: 'NEW_QUESTION',
    data: questionData
  }
}

function getDistanceFromLatLonInKm (locationFrom, locationTo) {
  var R = 6371 // Radius of the earth in km
  var dLat = deg2rad(locationTo.lat - locationFrom.lat)  // deg2rad below
  var dLon = deg2rad(locationTo.lng - locationFrom.lng)
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(locationFrom.lat)) * Math.cos(deg2rad(locationTo.lat)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2)

  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  var d = R * c // Distance in km
  return d
}

function deg2rad (deg) {
  return deg * (Math.PI / 180)
}

export function handleMapClick (event) {
  return function (dispatch, state) {
    if (!state().mapPicker.isSended) {
      const _pickedMarker = [{
        position: event.latLng,
        defaultAnimation: 4,
        key: Date.now() // Add a key property for: http://fb.me/react-warning-keys
      }]

      const _circleDistance = {
        position: event.latLng,
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
        defaultAnimation: 4,
        key: Date.now()
      }

      let _pickerLatLng = { lat: event.latLng.lat(), lng: event.latLng.lng() }
      let _currentPos = { lat: state().mapPicker.correctMarker.lat, lng: state().mapPicker.correctMarker.lng }
      let _distance = getDistanceFromLatLonInKm(_pickerLatLng, _currentPos).toFixed(0)
      emitData('data', {
        'cmd': 'syncGameData',
        'data': { 'cmd': 'gameAction', 'data': { 'lat': event.latLng.lat(), 'lng': event.latLng.lng() } }
      })
      dispatch(handleSubmitAnwser({
        pickedMarker: _pickedMarker,
        circleDistance: _circleDistance,
        distance: _distance
      }))
    }
  }
}

function handleSubmitAnwser (data) {
  return {
    type: 'SUBMIT_ANWSER',
    data: data
  }
}

function handleBoardStatus (data) {
  return {
    type: 'BOARD_STATUS',
    data: data
  }
}

function handleUserInfo (data) {
  return {
    type: USER_INFO,
    data
  }
}

function handlerInGame (data) {
  return {
    type: IN_GAME,
    data
  }
}

function handlerGameScore(data) {
  return {
    type: GAME_ACTIVITY,
    data
  }
}

function handlerEndGameSession(data) {
  return {
    type: END_GAME_SESSION,
    data
  }

}

function handlerEndGameResult(data) {
  return {
    type: END_GAME_RESULT,
    data
  }
}

export function listener (dispatch) {
  // This function is the actual event handler which will receive socket data.
  return function (resData) {
    if (resData.code === 'notFoundParticipant') {
      console.log("Can't join game")
      return
    } else if (resData.code === 'playerJoinBoardSuccess') {
      browserHistory.push(`/game`)
      console.log('Tìm được người chơi, chuẩn bị bắt đầu')
      if (resData.data.length > 0) {
        console.log('other user data:', resData.data)
      } else {
        console.log('waiting for other user')
      }
    } else if (resData.code === 'newPlayerJoinBoard') {
      console.log('other user data:', resData)
    } else if (resData.code === 'joinLobbySuccess') {
      browserHistory.push(`/dashboard`)
    } else if (resData.code === `getMyInfo` || resData.code === `loginSuccess`) {
      console.log(resData.data)
      dispatch(handleUserInfo(resData.data))
    } else if (resData.code === `waitingStartGame`) {
      dispatch(handlerInGame(resData.data))
    } else if (resData.code === `processActionSuccess` ) {
      dispatch(handlerGameScore(resData.data))
    } else if (resData.code == `startGame`) {
      dispatch(handlerEndGameSession(resData.data))
    } else if (resData.code == `endGame`) {
      dispatch(handlerEndGameResult(resData.data))
    }
    dispatch(handleBoardStatus(resData.code))

    if (resData.code === 'syncGameData' || resData.code === 'startGame') {
      if (resData.data.data.newQuestion !== undefined) {
        let newLocationData = resData.data.data.newQuestion
        let _correctMarker = {
          lat: newLocationData.latitude,
          lng: newLocationData.longitude,
          name: newLocationData.name,
          key: Date.now()
        }
        dispatch(handleNewQuestion(_correctMarker))
      }
    }

    dispatch({
      type: SOCKET_IO_MESSAGE,
      message: resData
    })

    // Attach any custom handler code here.
  }
}

