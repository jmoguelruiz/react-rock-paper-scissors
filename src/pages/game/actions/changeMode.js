import {CHANGE_MODE} from '../actionTypes';
import resetBoard from './resetBoard';
import api from '../api';

export default function() {
    return (dispatch) => {
        dispatch(resetBoard());
        dispatch({
            type : CHANGE_MODE,
            payload : ''
        });
        dispatch(api.connectPlayer());
    }
};