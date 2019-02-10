import {CHANGE_MODE} from '../actionTypes';
import api from '../api';

export default function() {
    return (dispatch) => {
        dispatch({
            type : CHANGE_MODE,
            payload : ''
        });
        dispatch(api.connectPlayer());
    }
};