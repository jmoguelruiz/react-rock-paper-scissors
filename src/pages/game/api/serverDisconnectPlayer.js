import { SERVER_DISCONNECT_PLAYER } from '../actionTypes';

/** Desconectarse del servidor. */
export default function (playerNumber, socketId) {
    return (dispatch) => {
        return dispatch({
            type: SERVER_DISCONNECT_PLAYER,
            payload: {
                playerNumber: playerNumber,
                socketId: socketId
            }
        });
    }
}
