import {CHANGE_MODE} from '../actionTypes';
import resetBoard from './resetBoard';
import {MODE_PLAYER_COMPUTER} from '../constants';
import api from '../api';
import {getMode} from '../selectors';

export default function() {
    return (dispatch, getState) => {

        const state = getState();
        const modeActual = getMode(state);


        if(modeActual == MODE_PLAYER_COMPUTER){
            dispatch(api.serverConnectPlayer());
        }else{
            dispatch(api.serverDisconnectPlayer());
        }

        dispatch(resetBoard());

        dispatch({
            type : CHANGE_MODE,
            payload : ''
        });


    }
};