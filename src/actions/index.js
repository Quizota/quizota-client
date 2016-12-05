import {
  CHANGE_FORM,
  SET_AUTH,
  SENDING_REQUEST,
  LOGIN_REQUEST,
  REGISTER_REQUEST,
  LOGOUT,
  REQUEST_ERROR,
  CLEAR_ERROR
} from './constants'
import socket from '../SocketIO'
import _ from "lodash";
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

export function handleSocket() {
  return function(dispatch, state) {
    socket.setHandler(function (resData) {
      if (resData.code == "syncGameData" || resData.code == "startGame") { 
        if (resData.data.cmd == "newQuestion" ) {
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
      else if (resData.code == "waitingStartGame") {
        let delay = resData.data.waitingTime
      }
    })
  }
}

function handleNewQuestion(questionData) {
  return {
    type: 'NEW_QUESTION',
    data: questionData
  };
}

function getDistanceFromLatLonInKm(locationFrom, locationTo) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(locationTo.lat - locationFrom.lat);  // deg2rad below
  var dLon = deg2rad(locationTo.lng - locationFrom.lng);
  var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(locationFrom.lat)) * Math.cos(deg2rad(locationTo.lat)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2)
    ;
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180)
}

export function handleMapClick(event) {
  return function(dispatch, state) {
    if (!state().mapPicker.isSended) {
      const _pickedMarker = [{
        position: event.latLng,
        defaultAnimation: 4,
        key: Date.now(), // Add a key property for: http://fb.me/react-warning-keys
      }]

      const _circleDistance = {
        position: event.latLng,
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
        defaultAnimation: 4,
        key: Date.now()
      }

      let _pickerLatLng = {lat: event.latLng.lat(), lng: event.latLng.lng()}
      let _currentPos = {lat: state().mapPicker.correctMarker.lat, lng: state().mapPicker.correctMarker.lng}
      let _distance = getDistanceFromLatLonInKm(_pickerLatLng, _currentPos).toFixed(0)
      socket.emitData('data', {
        "cmd": "syncGameData",
        "data": {"cmd": "gameAction", "data": {"lat": event.latLng.lat(), "lng": event.latLng.lng()}}
      })
      dispatch(handleSubmitAnwser({
          pickedMarker: _pickedMarker,
          circleDistance: _circleDistance,
          distance: _distance
        }))
    }
  }
}

function handleSubmitAnwser(data) {
  return {
    type: 'SUBMIT_ANWSER',
    data: data
  }
}