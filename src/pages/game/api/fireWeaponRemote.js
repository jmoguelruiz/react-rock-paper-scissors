import {FIRE_WEAPON_REMOTE} from '../actionTypes';
import resetBoard from '../actions/resetBoard';
import {getAnswerPlayer, getAnswerPlayerTwo} from '../selectors';

/** Funcion para activar un arma. */
export default function(type){

    return (dispatch, getState) => {

        const state = getState();
        const answerPlayer = getAnswerPlayer(state);
        const answerPlayerTwo = getAnswerPlayerTwo(state);

        if(answerPlayer && answerPlayerTwo){
            dispatch(resetBoard())
        }
        
        dispatch({
            type: FIRE_WEAPON_REMOTE,
            payload: type
        });
    }
    
}
