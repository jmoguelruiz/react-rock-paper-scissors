import { MODE_PLAYER_COMPUTER, MODE_PLAYER_PLAYER } from './constants';
import {
    FIRE_WEAPON, SERVER_FIRE_WEAPON_REMOTE, CHANGE_MODE,
    CONNECT_PLAYER_SUCCESS, FIRE_WEAPON_REMOTE_SUCCESS, SEND_WINNER, RESET_BOARD,
    UPDATE_PLAYERS_ONLINE, RESET_ANSWERS
} from './actionTypes';
import update from 'immutability-helper';

const INITIAL_STATE = {
    socketId: null, // Identificador del socket.
    mode: MODE_PLAYER_COMPUTER, // Modo
    playerNumber: null, // Numero del jugador
    answerPlayer: null, // Respuesta del jugador 1
    answerPlayerTwo: null, // Respuesta del jugador 2
    answerComputer: null, // Respeusta de la computadora
    winner: null, // Ganador
    scorePlayer: 0, // Puntaje del player 1
    scorePlayerTwo: 0, // Puntaje del player 2
    scoreComputer: 0, // Puntaje de la computadora
    playersOnline: 0, // Número de jugadores online
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {

        case FIRE_WEAPON:
            return update(state, {
                answerPlayer: { $set: action.payload.answerPlayer },
                answerComputer: { $set: action.payload.answerComputer },
                scoreComputer: { $apply: (value) => action.payload.winner === 'computer' ? value + 1 : value },
                scorePlayer: { $apply: (value) => action.payload.winner === 'player' ? value + 1 : value }
            });

        case CHANGE_MODE:
            return update(state, {
                mode: { $apply: (mode) => mode == MODE_PLAYER_COMPUTER ? MODE_PLAYER_PLAYER : MODE_PLAYER_COMPUTER }
            });

        case RESET_BOARD:
            return update(state, {
                socketId: { $set: null },
                playerNumber: { $set: null },
                answerPlayer: { $set: null },
                answerPlayerTwo: { $set: null },
                answerComputer: { $set: null },
                winner: { $set: null },
                scorePlayer: { $set: 0 },
                scorePlayerTwo: { $set: 0 },
                scoreComputer: { $set: 0 },
            });

        case RESET_ANSWERS:

            if (state.playerNumber == 0 || state.playerNumber == 1) {
                return update(state, {
                    answerPlayer: { $set: null },
                    answerPlayerTwo: { $set: null },
                    answerComputer: { $set: null },
                    winner: { $set: null },
                });
            }

            return state;

        case CONNECT_PLAYER_SUCCESS:
            return update(state, {
                socketId: { $set: action.payload.socketId },
                playerNumber: { $set: action.payload.playerNumber },
            });

        case UPDATE_PLAYERS_ONLINE:
            return update(state, {
                playersOnline: { $set: action.payload },
            });

        case SERVER_FIRE_WEAPON_REMOTE:
            if (state.playerNumber == 0 || state.playerNumber == 1) {
                return update(state, {
                    answerPlayer: { $apply: (value) => state.playerNumber == 0 ? action.payload : value },
                    answerPlayerTwo: { $apply: (value) => state.playerNumber == 1 ? action.payload : value }
                });
            }

            return state;

        case FIRE_WEAPON_REMOTE_SUCCESS:
            if (state.playerNumber == 0 || state.playerNumber == 1) {

                return update(state, {
                    answerPlayer: { $apply: (value) => action.payload.playerNumber == 0 ? action.payload.move : value },
                    answerPlayerTwo: { $apply: (value) => action.payload.playerNumber == 1 ? action.payload.move : value }
                });
            }

            return state;

        case SEND_WINNER:
            return update(state, {
                winner: { $set: action.payload },
                scorePlayer: { $apply: (value) => action.payload == 'playerOne' ? value + 1 : value },
                scorePlayerTwo: { $apply: (value) => action.payload == 'playerTwo' ? value + 1 : value }
            });

        default:
            return state;
    }
}