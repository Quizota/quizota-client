const io = require('socket.io-client')
const SOCKET_IO_MESSAGE = 'SOCKET_IO_MESSAGE';
var socket = io('http://localhost:8000/')
let handlerSocket

export function emitData (event, eventData) {
  console.log("go", event, eventData)
  socket.emit(event, eventData)
}

export function setHandler(_handler) {
  handlerSocket = _handler
  socket.on('data', function(responseData){
    console.log("set Handler", responseData)
    if(handlerSocket) {
      handlerSocket(responseData)
    }
  });
}

export function attachListener(func) {
  //Return a thunk, so that we can access dispatch
  return function(dispatch) {
    //We're passing dispatch into our listener so that it can dispatch events to redux.
    socket.on('data', func(dispatch));
  }
}


