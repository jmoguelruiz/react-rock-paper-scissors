import { REGISTER_USER } from '../actionTypes';
import setErrors from './setErrors';
import * as selectors from '../selectors';
import {push} from 'connected-react-router';
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
            type : REGISTER_USER,
            payload: {
                nickname : values.nickname, password: values.password
            }
        });

        dispatch(resetForm());
        dispatch(push('/react-rock-paper-scissors/login'));

    }
}

function isEmptyObject(obj){
    return Object.keys(obj).length === 0;
}

function validateFields(values, state){

    const errors = {};
    const users = selectors.getUsers(state);

    let existUser = users.find((user) => {
        return user.nickname === values.nickname;
    })

    if(!values.nickname){
        errors.nickname = 'El nickname es requerido.';
    }else if(existUser){
        errors.nickname = `El usuario ${values.nickname} ha sido registrado anteriormente.`
    }

    if(!values.password){
        errors.password = 'La contraseña es requerida.';
    }

    if(!values.confirmPassword){
        errors.confirmPassword = 'Por favor escriba la confirmación de la contraseña.'
    }

    if(values.password !== values.confirmPassword){
        errors.confirmPassword = 'La contraseña y la confirmación de la contraseña deben ser iguales.'
    }

    return errors;
}