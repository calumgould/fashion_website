import {
    TOGGLE_DARK_MODE,
    SELECT_PRODUCT,
    UPDATE_CART,
} from '../actions/'

export default (
    state = {
        darkMode: true,
        selectedProduct: null,
        cart: [],
        cartCount: 0,
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
        case UPDATE_CART:
            return {
                ...state,
                cart: action.updatedCart,
                cartCount: action.updatedCart.length
            }
        default:
            return state;
    }
};