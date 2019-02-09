import {FIRE_WEAPON_REMOTE} from '../actionTypes';

/** Funcion para activar un arma. */
export default function(type){
    return {
        type: FIRE_WEAPON_REMOTE,
        payload: type
    }
}
