import socket from '../../SocketIO'

let users
let localStorage

// If we're testing, use a local storage polyfill
if (global.process && process.env.NODE_ENV === 'test') {
  localStorage = require('localStorage')
} else {
  // If not, use the browser one
  localStorage = global.window.localStorage
}

let server = {
  /**
   * Populates the users, similar to seeding a database in the real world
   */
  init () {
    if (localStorage.users === undefined ) {
      // Set default user
      users = {
        "userName": "",
        "password": "",
        "displayName": ""
      }
      localStorage.users = JSON.stringify(users)
      localStorage.encrypted = true
    } else {
      users = JSON.parse(localStorage.users)
    }
  },
  /**
   * Pretends to log a user in
   *
   * @param  {string} userName The username of the user
   * @param  {string} password The password of the user
   */
  login (userName, password) {
    let userExists = this.doesUserExist()
    return new Promise((resolve, reject) => {
      console.log('go login:',userName, password)
      // If the user exists and the password fits log the user in and resolve
      console.log(userExists)
      if (userExists) {
        socket.setHandler(function (resData) {
          if (resData.code == "loginSuccess") {
            console.log('res data:', resData.data.profile)
            users["userName"] = resData.data.profile.userName
            users["password"] = resData.data.profile.password
            users["displayName"] = resData.data.profile.displayName
            localStorage.users = JSON.stringify(users)
            resolve({
              authenticated: true
            })
          }
        })
        let localUserData = JSON.parse(localStorage.users)
        console.log('localUserData', localUserData)
        socket.emitData('data', { "cmd": "login", "data": { "userName": users["userName"], "password": users["password"] } })
        return
      } else {
        // Set the appropiate error and reject
        let error
        if (userExists) {
          error = new Error('Sai mật khẩu')
        } else {
          error = new Error('Người dùng không tồn tại')
        }
        reject(error)
      }
    })
  },

  /**
   * Pretends to register a user
   *
   * @param  {string} displayName The username of the user
   * @param  {string} password The password of the user
   */
  register (displayName, password) {
    return new Promise((resolve, reject) => {
      if (!this.doesUserExist()) {
        socket.setHandler(function (resData) {
          if (resData.code == "loginSuccess") {
            console.log('res data:', resData.data.profile)
            users["userName"] = resData.data.profile.userName
            users["password"] = resData.data.profile.password
            users["displayName"] = resData.data.profile.displayName
            console.log('registed user:', users)
            localStorage.users = JSON.stringify(users)
            resolve(
              {registered: true, userName: resData.data.profile.userName, password: resData.data.profile.password}
            )
          }
        })
        socket.emitData('data', { "cmd": "autoRegister", "data": { "displayName": displayName} })
        return
        // Resolve when done
      } else {
        // Reject with appropiate error
        reject(new Error('Tên tài khoản này đã được sử dụng'))
      }
    })
  },
  /**
   * Pretends to log a user out and resolves
   */
  logout () {
    return new Promise(resolve => {
      localStorage.removeItem('token')
      resolve(true)
    })
  },
  /**
   * Checks if a username exists in the db
   * @param  {string} userName The username that should be checked
   */
  doesUserExist () {
    console.log('user exist', users.userName)
    return !(users["userName"] === "")
  }
}

server.init()

export default server
