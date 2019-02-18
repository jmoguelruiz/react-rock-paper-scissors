import { SET_ERRORS } from '../actionTypes';

export default function (errors) {
    return {
        type : SET_ERRORS,
        payload: errors
    }
}