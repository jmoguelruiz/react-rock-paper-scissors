import { CHANGE_MODE } from '../actionTypes';
import { MODE_PLAYER_COMPUTER } from '../constants';
import api from '../api';
import resetBoard from './resetBoard';
import { getMode, getSocketId, getPlayerNumber } from '../selectors';

// Cambiar el modo de player vs player ó player vs computer.
export default function () {
    return (dispatch, getState) => {

        const state = getState();
        const modeActual = getMode(state);
        const socketId = getSocketId(state);
        const playerNumber = getPlayerNumber(state);

        dispatch(resetBoard());
        dispatch({
            type: CHANGE_MODE,
            payload: ''
        });

        if (modeActual == MODE_PLAYER_COMPUTER) {
            dispatch(api.serverConnectPlayer());
        } else {
            dispatch(api.serverDisconnectPlayer(playerNumber, socketId));
        }
        
    }
};