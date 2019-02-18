import { CHANGE_FIELD } from '../actionTypes';

export default function (field, value) {
    return {
        type : CHANGE_FIELD,
        payload: {
            field: field,
            value: value
        }
    }
}