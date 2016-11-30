const io = require('socket.io-client');
let socket

class Socket {
  constructor() {
  }
  newfunc() {

  }
  connectSocket(token) {
    if (socket) {
      console.log("Disconnecting")
      socket.disconnect()
      socket = null
    } else {
      console.log('Connecting to socket')
      var socket = io('http://localhost:8000/')
      socket.on('connect', function(){
        console.log('Thông báo: Đã kết nối đến máy chủ trò chơi')
      });
    }
  }
  emitData(data) {
    console.log('go emit data')
    console.log('socket is:', socket)

      socket.on('autoRegister', function (data) {
        console.log(data)
        socket.emit('autoRegister', {my: 'data'})
      })

  }
}

export default new Socket
