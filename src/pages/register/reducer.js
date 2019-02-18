import update from 'immutability-helper';
import { CHANGE_FIELD, SET_ERRORS, REGISTER_USER, RESET_FORM } from './actionTypes';

const INITIAL_STATE = {
    formValues : {
        nickname : null,
        password: null,
        confirmPassword : null
    },
    errors: {
        nickname : null,
        password: null,
        confirmPassword: null
    },
    users: []
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {

        case CHANGE_FIELD:
        return update(state, {formValues : { [action.payload.field] : {$set : action.payload.value}}})

        case SET_ERRORS:
        return update(state, {errors : { $set : action.payload }})

        case REGISTER_USER:
        return update(state, {users : { $push : [action.payload]}});

        case RESET_FORM:
        return update(state, {
                errors : { $set : {nickname: null, pasword: null, confirmPassword:null}},
                formValues : { $set : {nickname: null, pasword: null, confirmPassword:null}},
            });


        default:
            return state;
    }
}