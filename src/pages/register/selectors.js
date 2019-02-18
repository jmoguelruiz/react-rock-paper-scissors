import { NAME } from './constants';
import { createSelector } from 'reselect';

export const getModel = (state) => {
    return state[NAME];
};

export const getFormValues = createSelector(
    getModel,
    (model) => model.formValues
);

export const getUsers = createSelector(
    getModel,
    (model) => model.users
);

export const getErrors = createSelector(
    getModel,
    (model) => model.errors
);