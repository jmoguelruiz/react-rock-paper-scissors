import {CHANGE_MODE} from '../actionTypes';
import resetBoard from './resetBoard';
import {MODE_PLAYER_COMPUTER} from '../constants';
import api from '../api';
import {getMode, getSocketId, getPlayerNumber} from '../selectors';

export default function() {
    return (dispatch, getState) => {

        const state = getState();
        const modeActual = getMode(state);
        const socketId = getSocketId(state);
        const playerNumber = getPlayerNumber(state);

        dispatch({
            type : CHANGE_MODE,
            payload : ''
        });

        if(modeActual == MODE_PLAYER_COMPUTER){
            dispatch(api.serverConnectPlayer());
        }else{
            dispatch(api.serverDisconnectPlayer(playerNumber, socketId));
        }


    }
};