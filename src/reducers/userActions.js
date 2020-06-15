import {
    TOGGLE_DARK_MODE,
    SELECT_PRODUCT,
    ADD_ITEM_TO_CART
} from '../actions/'

export default (
    state = {
        darkMode: true,
        selectedProduct: null,
        cart: []
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
        case ADD_ITEM_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.item]
            }
        default:
            return state;
    }
};