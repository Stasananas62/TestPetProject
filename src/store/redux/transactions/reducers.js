import { types } from './types';

export const initial = {
    transactionsList: {}
};

export default (state = initial, action) => {
    switch (action.type) {
        case types.ADD_TRANSACTION: {
            return {
                ...state,
                transactionsList: {...state.transactions, [action.payload?.date]: action.payload},
            };
        }
        default:
            return state;
    }
};
