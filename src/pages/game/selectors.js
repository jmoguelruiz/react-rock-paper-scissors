import { NAME, MODE_PLAYER_COMPUTER } from './constants';
import { createSelector } from 'reselect';
import { MODE_PLAYER_PLAYER } from './constants';

export const getModel = (state) => {
    return state[NAME];
};

export const getMode = createSelector(
    getModel,
    (model) => model.mode
);

export const getAnswerPlayer = createSelector(
    getModel,
    (model) => model.answerPlayer
);

export const getAnswerComputer = createSelector(
    getModel,
    (model) => model.answerComputer
);

export const getScorePlayer = createSelector(
    getModel,
    (model) => model.scorePlayer
);

export const getScoreComputer = createSelector(
    getModel,
    (model) => model.scoreComputer
);

export const getWaitingResponse = createSelector(
    getModel,
    (model) => model.waitingResponse
);

export const getPlayerNumber = createSelector(
    getModel,
    (model) => model.playerNumber
);

export const getIsRemote = createSelector(
    getModel,
    (model) => model.isRemote
);

export const getAnswerPlayerTwo = createSelector(
    getModel,
    (model) => model.answerPlayerTwo
);

export const getScorePlayerTwo = createSelector(
    getModel,
    (model) => model.scorePlayerTwo
);

export const getWinner = createSelector(
    getModel,
    (model) => model.winner
);

export const getSocketId = createSelector(
    getModel,
    (model) => model.socketId
);

export const getPlayersOnline = createSelector(
    getModel,
    (model) => model.playersOnline
);

export const getCanPlayOnline = createSelector(
    getMode,
    getPlayersOnline,
    getPlayerNumber,
    (mode, playersOnline, playerNumber) => {
        return (mode == MODE_PLAYER_COMPUTER  
            && playersOnline < 2) 
            || (mode == MODE_PLAYER_PLAYER) 
            && (playerNumber == 0 || playerNumber == 1 || playerNumber == null) 

    }
);
