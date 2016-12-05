const io = require('socket.io-client');
var socket = io('http://quizota.com:8000/')
let handler = null

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

  setHandler(_handler) {
    handler = _handler
    socket.on('data', function(responseData){
      if(handler) {
        handler(responseData)
      }
    });
  }

  emitData(event, eventData) {
    socket.emit(event, eventData)
    console.log('go emit data')
  }
}

export default new Socket
