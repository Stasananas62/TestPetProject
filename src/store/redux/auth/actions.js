import { authActionsTypes } from './types';


export const configurationActions = Object.freeze({
    signInRequest: (payload) => ({
        type: authActionsTypes.LOG_IN_REQUEST,
        payload,
    }),
});
