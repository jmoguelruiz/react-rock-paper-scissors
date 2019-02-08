var http = require('http');
var port = 8000;
var server = http.createServer();
var socket_io = require('socket.io');
const FIRE_WEAPON_PLAYER = 'server/game/FIRE_WEAPON_PLAYER';
const RESPONSE_PLAYER = 'game/RESPONSE_PLAYER';

server.listen(port);
console.log('listening on port ', port);
var io = socket_io();
io.attach(server);
io.on('connection', function (socket) {

  socket.on('action', (action) => {
      if (action.type === FIRE_WEAPON_PLAYER) {
        console.log('Got hello data!', action);
        socket.emit('action', { type: RESPONSE_PLAYER, payload: 'rock' });
      }
  });
});