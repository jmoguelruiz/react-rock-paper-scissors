import { LOGIN } from '../actionTypes';
import setErrors from './setErrors';
import * as selectors from '../selectors';
import {push} from 'connected-react-router';
import register from '../../register';
import resetForm from './resetForm';

export default function () {
    return (dispatch, getState) => {
        const state = getState();
        const values = selectors.getFormValues(state);
        
        const errors = validateFields(values, state)
        if(!isEmptyObject(errors)){
            dispatch(setErrors(errors));
            return;
        }

        dispatch({
            type : LOGIN,
            payload: values.nickname
        });
        dispatch(resetForm());
        dispatch(push('/react-rock-paper-scissors/'));

    }
}

function isEmptyObject(obj){
    return Object.keys(obj).length === 0;
}

function validateFields(values, state){

    const errors = {};
    const users = register.selectors.getUsers(state);

    if(!values.nickname){
        errors.nickname = 'El nickname es requerido.';
    }

    if(!values.password){
        errors.password = 'La contraseña es requerida.';
    }

    let element = users.find((user) => {
        return user.nickname === values.nickname;
    });

    if(!element){
        errors.password = 'El usuario o contraseña no son validos.'
    }else if(element.password !== values.password){
        errors.password = 'El usuario o contraseña no son validos.';
    }

    return errors;
}