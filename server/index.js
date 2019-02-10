const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const port = process.env.PORT || 8000;


const app = express();
const server = http.Server(app);
const io = socketio(server);

server.listen(port, () => console.log(`server started at port ${port}`));
console.log('=========');

let totalUsersConnected = 0;
let players = [];
let availablesPlayers = {
  playerOne : true,
  playerTwo : true
};

let element = null;

//ACTIONS
const SERVER_CONNECT_PLAYER = `server/game/SERVER_CONNECT_PLAYER`;
const SERVER_DISCONNECT_PLAYER = `server/game/SERVER_DISCONNECT_PLAYER`;
const CONNECT_PLAYER_SUCCESS = `game/CONNECT_PLAYER_SUCCESS`;
const UPDATE_PLAYERS_ONLINE = `game/UPDATE_PLAYERS_ONLINE`;
const FIRE_WEAPON_REMOTE = 'server/game/FIRE_WEAPON_REMOTE';
const FIRE_WEAPON_REMOTE_SUCCESS = 'game/FIRE_WEAPON_REMOTE_SUCCESS';


io.on('connection', function (socket) {
  

  totalUsersConnected++;
  
  // connections[playerIndex] = socket;
  console.log('socketId', socket.id);
  console.log('players', players);
  console.log('totalUsersConnected', totalUsersConnected)
  console.log('=========');

  io.emit('action', {
    type: UPDATE_PLAYERS_ONLINE,
    payload: players.length
  });


  // Acciones ejecutadas por redux.
  socket.on('action', (action) => {
    console.log('action', action);

    
    switch (action.type) {
      case SERVER_CONNECT_PLAYER:

        let availablePlayer = getAvailablePlayer();
        element = findElementBySocketId(socket.id);

        if(!element){
          players.push({
            socketId : socket.id,
            playerNumber : availablePlayer
          });
        }

        socket.emit('action', {
          type: CONNECT_PLAYER_SUCCESS,
          payload: {
            socketId : socket.id,
            playerNumber:  availablePlayer,
          }
        });

        io.emit('action', {
          type: UPDATE_PLAYERS_ONLINE,
          payload: players.length
        });

        break;

      case SERVER_DISCONNECT_PLAYER:
        removeSocketId(action.payload.socketId);
        setAvailablePlayer(action.payload.playerNumber);
        io.emit('action', {
          type: UPDATE_PLAYERS_ONLINE,
          payload: players.length
        });
        break;

     
      default:
        break;
    }
        
    console.log('availablesPlayers', availablesPlayers);
    console.log('playersOnline', players.length);
    console.log('players', players);
    console.log('=========');
    return;

  });



  /////////
  socket.on('disconnect', function () {
    totalUsersConnected--;
    removeSocketId(socket.id);
    io.emit('action', {
      type: UPDATE_PLAYERS_ONLINE,
      payload: players.length
    });
    console.log('socketId', socket.id);
    console.log('totalUsersConnected', totalUsersConnected)
    console.log('availablesPlayers', availablesPlayers);
    console.log('playersOnline', players.length);
    console.log('players', players);
    console.log('=========');

  });

});


function setAvailablePlayer(numberPlayer){
  if(numberPlayer == 0){
    availablesPlayers.playerOne = true;
  }else if(numberPlayer == 1){
    availablesPlayers.playerTwo = true;
  }
}

function getAvailablePlayer(){
  if(availablesPlayers.playerOne){
    availablesPlayers.playerOne = false;
    return 0;
  }else if(availablesPlayers.playerTwo){
    availablesPlayers.playerTwo = false;
    return 1;
  }
  
  return -1;
  
}

function findElementBySocketId(socketId){
    return players.find((element) => {
      return element.socketId == socketId;
    });
}

function removeSocketId(socketId){
    players = players.filter((player) => {
        if(player.socketId == socketId){
          setAvailablePlayer(player.playerNumber);
        }
        return player.socketId !== socketId;
    });
}

// /** Actions */
// const CONNECT_PLAYER = 'server/game/CONNECT_PLAYER';
// const CONNECT_PLAYER_SUCCESS = 'game/CONNECT_PLAYER_SUCCESS';
// const FIRE_WEAPON_REMOTE = 'server/game/FIRE_WEAPON_REMOTE';
// const FIRE_WEAPON_REMOTE_SUCCESS = 'game/FIRE_WEAPON_REMOTE_SUCCESS';
// const SEND_WINNER = 'game/SEND_WINNER';
// const RESET_BOARD = 'game/RESET_BOARD';

// const winTable = {
//   'rock': { 'rock': 0, 'paper': -1, 'scissors': 1 },
//   'paper': { 'rock': 1, 'paper': 0, 'scissors': -1 },
//   'scissors': { 'rock': -1, 'paper': 1, 'scissors': 0 }
// };

// app.use(express.static('public'));

// server.listen(port, () => console.log('server started'));

// const connections = [null, null];
// let weaponPlayerOne = null;
// let weaponPlayerTwo = null

// io.on('connection', function (socket) {

//   let playerIndex = -1;
//   console.log('socketId', socket.id);
//   for (var i in connections) {
//     if (connections[i] == null) {
//       playerIndex = i;
//     }
//   }
//   connections[playerIndex] = socket;

//   socket.on('action', (action) => {
//     console.log('action', action);
//     switch (action.type) {

//       case CONNECT_PLAYER:
//         socket.emit('action', {
//           type: CONNECT_PLAYER_SUCCESS,
//           payload: playerIndex
//         });
//         return;

//       case FIRE_WEAPON_REMOTE:

//         if (!weaponPlayerOne && !weaponPlayerTwo) {
//           socket.broadcast.emit('action', {
//             type: RESET_BOARD
//           });
//         }

//         if (playerIndex == 0) {
//           weaponPlayerOne = action.payload;
//         } else {
//           weaponPlayerTwo = action.payload;
//         }
//         console.log("weaponPlayerOne", weaponPlayerOne);
//         console.log("weaponPlayerTwo", weaponPlayerTwo);

//         socket.broadcast.emit('action', {
//           type: FIRE_WEAPON_REMOTE_SUCCESS,
//           payload: {
//             playerIndex: playerIndex,
//             move: action.payload
//           }
//         });

//         if (weaponPlayerOne && weaponPlayerTwo) {
//           io.emit('action', {
//             type: SEND_WINNER,
//             payload: getWinner()
//           });

//           weaponPlayerOne = null;
//           weaponPlayerTwo = null;
//         }

//         return;

//       default:
//         return;
//     }
//   });

//   socket.on('disconnect', function () {
//     console.log(`Player ${playerIndex} Disconnected`);
//     connections[playerIndex] = null;

//     weaponPlayerOne = null;
//     weaponPlayerTwo = null;

//     socket.broadcast.emit('action', {
//       type: RESET_BOARD
//     });
//   });

// });

// function getWinner() {
//   return winTable[weaponPlayerOne][weaponPlayerTwo] === 0
//     ? 'tie'
//     : winTable[weaponPlayerOne][weaponPlayerTwo] === 1
//       ? 'playerOne' : 'playerTwo';
// }
