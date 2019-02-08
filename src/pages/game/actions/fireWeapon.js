import {FIRE_WEAPON} from '../actionTypes';

const weapons = ['rock', 'paper', 'scissors'];
const winTable = {
    'rock' : {
        'rock' : 0,
        'paper' : -1,
        'scissor' : 1
    },
    'paper' : {
        'rock' : 1,
        'paper' : 0,
        'scissor' : -1
    },
    'scissors' : {
        'rock' : -1,
        'paper' : 1,
        'scissor' : 0
    } 
}




/** Funcion para activar un arma. */
export default function(type){

    let answerComputer = getComputerChoice();

    let winner = winTable[answerComputer][type] === 0 
                ? 'tie'
                : winTable[answerComputer][type] === 1
                   ? 'computer' : 'player';


    return {
        type : FIRE_WEAPON,
        payload: {
            answerComputer : answerComputer,
            answerPlayer : type,
            winner : winner
        }
    }
}

/** Selecciona un elemento aleatorio. */
const getComputerChoice = () => {
    return weapons[Math.floor(Math.random() * weapons.length)];
}