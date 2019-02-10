import { MODE_PLAYER_COMPUTER, MODE_PLAYER_PLAYER } from './constants';
import {
    FIRE_WEAPON, FIRE_WEAPON_REMOTE, CHANGE_MODE,
    CONNECT_PLAYER_SUCCESS, FIRE_WEAPON_REMOTE_SUCCESS, SEND_WINNER, RESET_BOARD
} from './actionTypes';
import update from 'immutability-helper';

const INITIAL_STATE = {
    isRemote: false,
    playerNumber: null,
    mode: MODE_PLAYER_COMPUTER,
    answerPlayer: null,
    answerPlayerTwo: null,
    winner: null,
    scorePlayer: 0,
    scorePlayerTwo: 0,
    scoreComputer: 0,
    waitingResponse: false
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {

        case FIRE_WEAPON_REMOTE:

            state = update(state, { waitingResponse: { $set: true } });
            if (state.playerNumber == 0) {
                state = update(state, { answerPlayer: { $set: action.payload } })
            } else {
                state = update(state, { answerPlayerTwo: { $set: action.payload } })
            }
            return state;

        case FIRE_WEAPON_REMOTE_SUCCESS:
            state = update(state, { waitingResponse: { $set: false } });
            if (action.payload.playerIndex == 0) {
                state = update(state, { answerPlayer: { $set: action.payload.move } })
            } else {
                state = update(state, { answerPlayerTwo: { $set: action.payload.move } })
            }
            return state;

        case CONNECT_PLAYER_SUCCESS:
            return update(state, {
                playerNumber: { $set: action.payload },
                isRemote: { $set: true }
            });

        case SEND_WINNER:
            state = update(state, { winner: { $set: action.payload } });
            if (action.payload === 'playerOne') {
                state = update(state, { scorePlayer: { $apply: (value) => value + 1 } })
            } else if (action.payload === 'playerTwo') {
                state = update(state, { scorePlayerTwo: { $apply: (value) => value + 1 } })
            }
            return state;

        case CHANGE_MODE:
            return update(state, { mode: { $apply: (mode) => mode == MODE_PLAYER_COMPUTER ? MODE_PLAYER_PLAYER : MODE_PLAYER_COMPUTER } });

        case FIRE_WEAPON:
            state = update(state, {
                answerPlayer: { $set: action.payload.answerPlayer },
                answerComputer: { $set: action.payload.answerComputer },
            });
            if (action.payload.winner === 'computer') {
                state = update(state, { scoreComputer: { $apply: (value) => value + 1 } })
            } else if (action.payload.winner === 'player') {
                state = update(state, { scorePlayer: { $apply: (value) => value + 1 } })
            }
            return state;

        case RESET_BOARD:
            return update(state, {
                answerPlayer: { $set: null },
                answerPlayerTwo: { $set: null },
                answerComputer: { $set: null },
                winner: { $set: null }
            });


        default:
            return state;
    }
}