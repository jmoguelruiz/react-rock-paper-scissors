import { MODE_PLAYER_COMPUTER, MODE_PLAYER_PLAYER } from './constants';
import {
    FIRE_WEAPON, FIRE_WEAPON_REMOTE, CHANGE_MODE,
    CONNECT_PLAYER_SUCCESS, FIRE_WEAPON_REMOTE_SUCCESS, SEND_WINNER, RESET_BOARD, 
    UPDATE_PLAYERS_ONLINE
} from './actionTypes';
import update from 'immutability-helper';

const INITIAL_STATE = {
    socketId: null,
    mode: MODE_PLAYER_COMPUTER,
    playerNumber: null,
    answerPlayer: null,
    answerPlayerTwo: null,
    answerComputer: null,
    winner: null,
    scorePlayer: 0,
    scorePlayerTwo: 0,
    scoreComputer: 0,
    playersOnline : 0,
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

        case CONNECT_PLAYER_SUCCESS:
            return update(state, {
                socketId: { $set: action.payload.socketId },
                playerNumber: { $set: action.payload.playerNumber },
            });

        case UPDATE_PLAYERS_ONLINE:
            return update(state, {
                playersOnline: { $set: action.payload },
            });

 














        case FIRE_WEAPON_REMOTE:

            if (state.playerNumber == 0) {
                state = update(state, { answerPlayer: { $set: action.payload } })
            } else {
                state = update(state, { answerPlayerTwo: { $set: action.payload } })
            }
            return state;

        case FIRE_WEAPON_REMOTE_SUCCESS:
            if (action.payload.playerIndex == 0) {
                state = update(state, { answerPlayer: { $set: action.payload.move } })
            } else {
                state = update(state, { answerPlayerTwo: { $set: action.payload.move } })
            }
            return state;

        case SEND_WINNER:
            state = update(state, { winner: { $set: action.payload } });
            if (action.payload === 'playerOne') {
                state = update(state, { scorePlayer: { $apply: (value) => value + 1 } })
            } else if (action.payload === 'playerTwo') {
                state = update(state, { scorePlayerTwo: { $apply: (value) => value + 1 } })
            }
            return state;






        default:
            return state;
    }
}