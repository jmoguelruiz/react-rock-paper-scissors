import {SERVER_DISCONNECT_PLAYER} from '../actionTypes';
import {getSocketId, getPlayerNumber} from '../selectors';

export default function(playerNumber, socketId){
    return (dispatch, getState) => {
        return dispatch({
            type: SERVER_DISCONNECT_PLAYER,
            payload: {
                playerNumber: playerNumber,
                socketId : socketId
            } 
        });
    }
}
