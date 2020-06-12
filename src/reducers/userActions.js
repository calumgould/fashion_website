import {
    TOGGLE_DARK_MODE,
    SELECT_PRODUCT
} from '../actions/'

export default (
    state = {
        darkMode: true,
        selectedProduct: null
    },
    action
) => {
    switch (action.type) {
        case TOGGLE_DARK_MODE:
            return {
                ...state,
                darkMode: action.darkMode
            };
        case SELECT_PRODUCT:
            return {
                ...state,
                selectedProduct: action.product
            }
        default:
            return state;
    }
};