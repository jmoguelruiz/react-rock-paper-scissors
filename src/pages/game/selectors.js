import { NAME } from './constants';
import { createSelector } from 'reselect';

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
