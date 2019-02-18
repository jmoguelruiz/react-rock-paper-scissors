const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const port = process.env.PORT || 8000;

// Levantando servidor express.
const app = express();
const server = http.Server(app);
const io = socketio(server);
server.listen(port, () => console.log(`server started at port ${port}`));
console.log('=========');

// Tabla comparativa para saber quien fue el ganador.
const winTable = {
  'rock': { 'rock': 0, 'paper': -1, 'scissors': 1 },
  'paper': { 'rock': 1, 'paper': 0, 'scissors': -1 },
  'scissors': { 'rock': -1, 'paper': 1, 'scissors': 0 }
};

// Variable que indica el total de usuarios conectados.
let totalUsersConnected = 0;

// Jugadores que le han dado click al botón "Cambiar Modo" para jugar online.
let players = [];

// Los dos primeros jugadores.
let availablesPlayers = {
  playerOne: true,
  playerTwo: true
};

// Disparo del primer jugador.
let weaponPlayerOne = null;

// Disparo del segundo jugador.
let weaponPlayerTwo = null

// Elemento de conexión.
let element = null;

//Acciones reconocidas por redux.
const SERVER_CONNECT_PLAYER = `server/game/SERVER_CONNECT_PLAYER`;
const SERVER_DISCONNECT_PLAYER = `server/game/SERVER_DISCONNECT_PLAYER`;
const CONNECT_PLAYER_SUCCESS = `game/CONNECT_PLAYER_SUCCESS`;
const UPDATE_PLAYERS_ONLINE = `game/UPDATE_PLAYERS_ONLINE`;
const SERVER_FIRE_WEAPON_REMOTE = 'server/game/SERVER_FIRE_WEAPON_REMOTE';
const FIRE_WEAPON_REMOTE_SUCCESS = 'game/FIRE_WEAPON_REMOTE_SUCCESS';
const SEND_WINNER = 'game/SEND_WINNER';
const RESET_ANSWERS = 'game/RESET_ANSWERS';

io.on('connection', function (socket) {

  totalUsersConnected++;

  io.emit('action', {
    type: UPDATE_PLAYERS_ONLINE,
    payload: players.length
  });

  // Acciones identificadas como ejecutadas por redux del lado del cliente..
  socket.on('action', (action) => {

    switch (action.type) {
      case SERVER_CONNECT_PLAYER: // Cuando se conecta un jugador "Cambia el modo a 'player vs player' en el lado del cliente."

        let availablePlayer = getAvailablePlayer();
        element = findElementBySocketId(socket.id);

        if (!element) {
          players.push({
            socketId: socket.id,
            playerNumber: availablePlayer
          });
        }

        socket.emit('action', {
          type: CONNECT_PLAYER_SUCCESS,
          payload: {
            socketId: socket.id,
            playerNumber: availablePlayer,
          }
        });

        io.emit('action', {
          type: UPDATE_PLAYERS_ONLINE,
          payload: players.length
        });

        break;
      
      case SERVER_DISCONNECT_PLAYER: // Se desconecta un jugador "Cambia el modo a 'player vs computer' en el lado del cliente."

        removeSocketId(action.payload.socketId);
        setAvailablePlayer(action.payload.playerNumber);

        io.emit('action', {
          type: UPDATE_PLAYERS_ONLINE,
          payload: players.length
        });

        break;

      case SERVER_FIRE_WEAPON_REMOTE: // Alguien ha hecho un disparo (Pieda papel o tijera).

        if (!weaponPlayerOne && !weaponPlayerTwo) {
          socket.broadcast.emit('action', {
            type: RESET_ANSWERS
          });
        }

        element = findElementBySocketId(socket.id);

        if (element.playerNumber == 0) {
          weaponPlayerOne = action.payload;
        } else {
          weaponPlayerTwo = action.payload;
        }

        socket.broadcast.emit('action', {
          type: FIRE_WEAPON_REMOTE_SUCCESS,
          payload: {
            playerNumber: element.playerNumber,
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

        break;

      default:
        break;
    }

    return;

  });

  // Evento cuando se desconecta la conexion.
  socket.on('disconnect', function () {

    totalUsersConnected--;
    removeSocketId(socket.id);
    weaponPlayerOne = null;
    weaponPlayerTwo = null;

    io.emit('action', {
      type: UPDATE_PLAYERS_ONLINE,
      payload: players.length
    });

  });

});

// Asigna al jugador si es el jugador 1 o el jugador 2.
function setAvailablePlayer(numberPlayer) {
  if (numberPlayer == 0) {
    availablesPlayers.playerOne = true;
  } else if (numberPlayer == 1) {
    availablesPlayers.playerTwo = true;
  }
}

// Obtener que jugador se escuentra disponible 1 o 2 en caso de no haber devuelve -1;
function getAvailablePlayer() {
  if (availablesPlayers.playerOne) {
    availablesPlayers.playerOne = false;
    return 0;
  } else if (availablesPlayers.playerTwo) {
    availablesPlayers.playerTwo = false;
    return 1;
  }
  return -1;
}

// Encuentra la conexion por el socketId del arreglo de jugadores disponibles.
function findElementBySocketId(socketId) {
  return players.find((element) => {
    return element.socketId == socketId;
  });
}

// Elimina la conexion por socketId del arreglo de jugadores disponibles.
function removeSocketId(socketId) {
  players = players.filter((player) => {
    if (player.socketId == socketId) {
      setAvailablePlayer(player.playerNumber);
    }
    return player.socketId !== socketId;
  });
}

// Dependiendo de los disparos de cada jugador se define quien fue el ganador.
function getWinner() {
  return winTable[weaponPlayerOne][weaponPlayerTwo] === 0
    ? 'tie'
    : winTable[weaponPlayerOne][weaponPlayerTwo] === 1
      ? 'playerOne' : 'playerTwo';
}
