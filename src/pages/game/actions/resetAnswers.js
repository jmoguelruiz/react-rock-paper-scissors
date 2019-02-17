import { RESET_ANSWERS } from '../actionTypes';

/** Resetea las respuestas de los jugadores */
export default function () {
    return {
        type: RESET_ANSWERS,
        payload: null
    }
};