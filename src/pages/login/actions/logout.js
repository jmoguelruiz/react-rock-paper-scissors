import { LOGOUT } from '../actionTypes';
import {push} from 'connected-react-router';
import resetForm from './resetForm';

export default function (field, value) {
    return dispatch => {
        dispatch({
            type : LOGOUT
        });
        dispatch(resetForm());
        dispatch(push('/react-rock-paper-scissors/login'));
        
    }
}