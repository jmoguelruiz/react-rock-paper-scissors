import { RESET_BOARD } from '../actionTypes';

/** Resetea todo el board */
export default function () {
    return {
        type: RESET_BOARD,
        payload: null
    }
};