import { FIRE_WEAPON } from '../actionTypes';
/** Disparos */
const weapons = ['rock', 'paper', 'scissors'];

/** Tabla para saber el ganador. */
const winTable = {
    'rock': { 'rock': 0, 'paper': -1, 'scissors': 1 },
    'paper': { 'rock': 1, 'paper': 0, 'scissors': -1 },
    'scissors': { 'rock': -1, 'paper': 1, 'scissors': 0 }
};

/** Funcion para activar un arma. */
export default function (type) {

    let answerComputer = getComputerChoice();

    let winner = winTable[answerComputer][type] === 0
        ? 'tie'
        : winTable[answerComputer][type] === 1
            ? 'computer' : 'player';

    return {
        type: FIRE_WEAPON,
        payload: {
            answerComputer: answerComputer,
            answerPlayer: type,
            winner: winner
        }
    }
}

/** Selecciona un elemento aleatorio. */
const getComputerChoice = () => {
    return weapons[Math.floor(Math.random() * weapons.length)];
}