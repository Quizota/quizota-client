const io = require('socket.io-client');
var socket = io('http://localhost:8000/')

class Socket {
  constructor() {
  }
  newfunc() {

  }
  connectSocket(token) {
    if (socket) {
    } else {
      socket.on('connect', function(){
        console.log('Thông báo: Đã kết nối đến máy chủ trò chơi')
      });
    }
  }
  emitData(event, eventData) {
    let data = 'dddd'
    socket.emit('autoRegister', {my: 'data'})
    console.log('go emit data')
  }
}

export default new Socket
