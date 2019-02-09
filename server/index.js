const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const port = process.env.PORT || 4001;


const app = express();
const server = http.Server(app);
const io = socketio(server); 

/** Actions */
const CONNECT_PLAYER = 'server/game/CONNECT_PLAYER';
const CONNECT_PLAYER_SUCCESS = 'game/CONNECT_PLAYER_SUCCESS';
const FIRE_WEAPON_REMOTE = 'server/game/FIRE_WEAPON_REMOTE';
const FIRE_WEAPON_REMOTE_SUCCESS = 'game/FIRE_WEAPON_REMOTE_SUCCESS';

app.use(express.static('public')); 

server.listen(port, () => console.log('server started'));

const connections = [null, null];

io.on('connection', function (socket) {

  let playerIndex = -1;
  console.log('socketId',socket.id);
  for (var i in connections) {
    if (connections[i] == null) {
      playerIndex = i;
    }
  }
  connections[playerIndex] = socket;

  socket.on('action', (action) => {
      console.log('action', action);
      switch(action.type){

        case CONNECT_PLAYER:    
          socket.emit('action', { 
            type: CONNECT_PLAYER_SUCCESS,
            payload: playerIndex
          });
        return;

        case FIRE_WEAPON_REMOTE: 
          socket.broadcast.emit('action', { 
            type: FIRE_WEAPON_REMOTE_SUCCESS,
            payload: {
              playerIndex : playerIndex,
              move: action.payload
            } 
          });
        return;

        default:
        return;
      }
  });

  socket.on('disconnect', function() {
    console.log(`Player ${playerIndex} Disconnected`);
    connections[playerIndex] = null;
  });

});


// var port = 8000;
// var server = http.createServer();
// const FIRE_WEAPON_PLAYER = 'server/game/FIRE_WEAPON_PLAYER';
// const RESPONSE_PLAYER = 'game/RESPONSE_PLAYER';

// server.listen(port);
// console.log('listening on port ', port);
// var io = socketio();
// io.attach(server);
// io.on('connection', function (socket) {
//   console.log(socket.id);
//   socket.on('action', (action) => {
//       if (action.type === FIRE_WEAPON_PLAYER) {
//         console.log('Got hello data!', action);
//         socket.emit('action', { type: RESPONSE_PLAYER, payload: 'rock' });
//       }
//   });
// });