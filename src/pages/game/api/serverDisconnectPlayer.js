import {SERVER_DISCONNECT_PLAYER} from '../actionTypes';
import {getSocketId, getPlayerNumber} from '../selectors';

export default function(){
    return (dispatch, getState) => {

        const state = getState()
        const socketId = getSocketId(state);
        const playerNumber = getPlayerNumber(state);

        return dispatch({
            type: SERVER_DISCONNECT_PLAYER,
            payload: {
                playerNumber: playerNumber,
                socketId : socketId
            } 
        });
    }
}
