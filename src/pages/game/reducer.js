import { MODE_PLAYER_COMPUTER, MODE_PLAYER_PLAYER } from './constants';
import {
    FIRE_WEAPON, FIRE_WEAPON_REMOTE, RESPONSE_PLAYER, CHANGE_MODE,
    CONNECT_PLAYER_SUCCESS, FIRE_WEAPON_REMOTE_SUCCESS
} from './actionTypes';
import update from 'immutability-helper';

const INITIAL_STATE = {
    isRemote : false,
    playerNumber : null,
    mode: MODE_PLAYER_COMPUTER, 
    answerPlayer: null,
    answerPlayerTwo: null,
    scorePlayer: 0,
    scoreComputer: 0,
    waitingResponse : false
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {

        case FIRE_WEAPON_REMOTE:

        state = update(state, {waitingResponse : {$set : true}});
        if(state.playerNumber == 0){
            state = update(state, {answerPlayer: {$set : action.payload}})
        }else{
            state = update(state, {answerPlayerTwo: {$set : action.payload}})
        }
        return state;

        case FIRE_WEAPON_REMOTE_SUCCESS:
            state = update(state, {waitingResponse : {$set : false}});
            if(action.payload.playerIndex == 0){
                state = update(state, {answerPlayer: {$set : action.payload.move}})
            }else{
                state = update(state, {answerPlayerTwo: {$set : action.payload.move}})
            }
        return state;

        case CONNECT_PLAYER_SUCCESS:
        return update(state, {
            playerNumber : {$set : action.payload},
            isRemote: {$set: true }
        });

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