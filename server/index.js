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
const SEND_WINNER = 'game/SEND_WINNER';
const RESET_BOARD = 'game/RESET_BOARD';

const winTable = {
  'rock': { 'rock': 0, 'paper': -1, 'scissors': 1 },
  'paper': { 'rock': 1, 'paper': 0, 'scissors': -1 },
  'scissors': { 'rock': -1, 'paper': 1, 'scissors': 0 }
};

app.use(express.static('public'));

server.listen(port, () => console.log('server started'));

const connections = [null, null];
let weaponPlayerOne = null;
let weaponPlayerTwo = null

io.on('connection', function (socket) {

  let playerIndex = -1;
  console.log('socketId', socket.id);
  for (var i in connections) {
    if (connections[i] == null) {
      playerIndex = i;
    }
  }
  connections[playerIndex] = socket;

  socket.on('action', (action) => {
    console.log('action', action);
    switch (action.type) {

      case CONNECT_PLAYER:
        socket.emit('action', {
          type: CONNECT_PLAYER_SUCCESS,
          payload: playerIndex
        });
        return;

      case FIRE_WEAPON_REMOTE:

        if (!weaponPlayerOne && !weaponPlayerTwo) {
          socket.broadcast.emit('action', {
            type: RESET_BOARD
          });
        }

        if (playerIndex == 0) {
          weaponPlayerOne = action.payload;
        } else {
          weaponPlayerTwo = action.payload;
        }
        console.log("weaponPlayerOne", weaponPlayerOne);
        console.log("weaponPlayerTwo", weaponPlayerTwo);

        socket.broadcast.emit('action', {
          type: FIRE_WEAPON_REMOTE_SUCCESS,
          payload: {
            playerIndex: playerIndex,
            move: action.payload
          }
        });

        if (weaponPlayerOne && weaponPlayerTwo) {
          io.emit('action', {
            type: SEND_WINNER,
            payload: getWinner()
          });

          weaponPlayerOne = null;
          weaponPlayerTwo = null;
        }

        return;

      default:
        return;
    }
  });

  socket.on('disconnect', function () {
    console.log(`Player ${playerIndex} Disconnected`);
    connections[playerIndex] = null;

    weaponPlayerOne = null;
    weaponPlayerTwo = null;

    socket.broadcast.emit('action', {
      type: RESET_BOARD
    });
  });

});

function getWinner() {
  return winTable[weaponPlayerOne][weaponPlayerTwo] === 0
    ? 'tie'
    : winTable[weaponPlayerOne][weaponPlayerTwo] === 1
      ? 'playerOne' : 'playerTwo';
}
