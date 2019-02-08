import {FIRE_WEAPON_PLAYER} from '../actionTypes';

/** Funcion para activar un arma. */
export default function(type){
    return {
        type: FIRE_WEAPON_PLAYER,
        payload: {
            type : type,
            otroDato: 'ala verch si funciona!'
        }
    }
}
