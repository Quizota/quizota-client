import request from './authSocketManager'
import socket from '../../SocketIO'

let localStorage

// If we're testing, use a local storage polyfill
if (global.process && process.env.NODE_ENV === 'test') {
  localStorage = require('localStorage')
} else {
  // If not, use the browser one
  localStorage = global.window.localStorage
}

let auth = {
  /**
   * Logs a user in, returning a promise with `true` when done
   * @param  {string} username The username of the user
   * @param  {string} password The password of the user
   */
  login (username, password) {
    if (auth.loggedIn()) return Promise.resolve(true)
    // Post a fake request
    return request.post('/login', { username, password })
      .then(response => {
        // Save token to local storage
        localStorage.token = response.token
        return Promise.resolve(true)
      })
  },
  /**
   * Logs the current user out
   */
  logout () {
    return request.post('/logout')
  },
  /**
   * Checks if a user is logged in
   */
  loggedIn () {
    let users = JSON.parse(localStorage.users)
    if (users.userName !== '') {
      socket.emitData(
          'data',
        { 'cmd':
          'login',
          'data':
          { 'userName': users['userName'], 'password': users['password'] }
        }
      )
      return true
    }
    return false
  },
  /**
   * Registers a user and then logs them in
   * @param  {string} username The username of the user
   * @param  {string} password The password of the user
   */
  register (displayName, password) {
    // Post a fake request
    return request.post('/register', { displayName, password })
    // Log user in after registering
      .then((result) => auth.login(result.userName, result.password))
  },
  onChange () {}
}

export default auth
