import { SERVER_FIRE_WEAPON_REMOTE } from '../actionTypes';
import resetAnswers from '../actions/resetAnswers';
import { getAnswerPlayer, getAnswerPlayerTwo } from '../selectors';

/** Funcion para activar un arma en el servidor. */
export default function (type) {

    return (dispatch, getState) => {

        const state = getState();
        const answerPlayer = getAnswerPlayer(state);
        const answerPlayerTwo = getAnswerPlayerTwo(state);

        if (answerPlayer && answerPlayerTwo) {
            dispatch(resetAnswers())
        }

        dispatch({
            type: SERVER_FIRE_WEAPON_REMOTE,
            payload: type
        });
    }

}
