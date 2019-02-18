import update from 'immutability-helper';
import { CHANGE_FIELD, SET_ERRORS, LOGIN, LOGOUT, RESET_FORM } from './actionTypes';

const INITIAL_STATE = {
    isLogged : false,
    nickname : null,
    formValues : {
        nickname : null,
        password: null
    },
    errors : {
        nickname : null,
        password: null
    }
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case CHANGE_FIELD:
        return update(state, {formValues : { [action.payload.field] : {$set : action.payload.value}}})

        case SET_ERRORS:
        return update(state, {errors : { $set : action.payload }})

        case LOGIN:
        return update(state, {isLogged : { $set : true}, nickname: {$set : action.payload}});

        case LOGOUT:
        return update(state, {isLogged : { $set : false}, nickname: {$set : null}});

        case RESET_FORM:
        return update(state, {
                errors : { $set : {nickname: null, pasword: null}},
                formValues : { $set : {nickname: null, pasword: null}},
            });

        default:
            return state;
    }
}