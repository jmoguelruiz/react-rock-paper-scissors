import { NAME } from './constants';
import { createSelector } from 'reselect';

export const getModel = (state) => {
    return state[NAME];
};

export const getFormValues = createSelector(
    getModel,
    (model) => model.formValues
);

export const getErrors = createSelector(
    getModel,
    (model) => model.errors
);

export const getIsLogged = createSelector(
    getModel,
    (model) => model.isLogged
);