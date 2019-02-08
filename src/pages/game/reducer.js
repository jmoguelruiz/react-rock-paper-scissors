import { MODE_PLAYER_COMPUTER, MODE_PLAYER_PLAYER } from './constants';
import {FIRE_WEAPON, FIRE_WEAPON_PLAYER, RESPONSE_PLAYER, CHANGE_MODE} from './actionTypes';
import update from 'immutability-helper';

const INITIAL_STATE = {
    mode: MODE_PLAYER_COMPUTER, 
    answerPlayer: null,
    answerComputer: null,
    scorePlayer: 0,
    scoreComputer: 0,
    waitingResponse : false
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {

        case FIRE_WEAPON_PLAYER:
        return update(state, {waitingResponse : { $set : true}});

        case RESPONSE_PLAYER:
        return update(state, {waitingResponse : {$set : true}});

        case CHANGE_MODE:
        return update(state, {mode : {$apply : (mode) => mode == MODE_PLAYER_COMPUTER ? MODE_PLAYER_PLAYER : MODE_PLAYER_COMPUTER}});

        case FIRE_WEAPON:
        state = update(state, {
                    answerPlayer : {$set : action.payload.answerPlayer}, 
                    answerComputer: {$set : action.payload.answerComputer},
                });
        if(action.payload.winner === 'computer'){
            state = update(state, {scoreComputer: {$apply : (value) => value + 1 }})
        }else if(action.payload.winner === 'player'){
            state = update(state, {scorePlayer: {$apply : (value) => value + 1 }})
        }
        return state;

        default:
            return state;
    }
}