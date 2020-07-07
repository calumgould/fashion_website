import {
    TOGGLE_DARK_MODE,
    SELECT_PRODUCT,
    GET_CART,
    ADD_TO_CART,
    INCREASE_QUANTITY,
    DECREASE_QUANTITY,
    REMOVE_FROM_CART
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
        case GET_CART:
            return {
                ...state,
                cart: action.userCart,
                cartCount: action.userCart.length
            }
        case ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.product],
                cartCount: state.cart.length
            }
        case INCREASE_QUANTITY:
            return {
                ...state,
                cart: [
                    ...state.cart.slice(0, action.index),
                    {
                        ...state.cart[action.index],
                        quantity: state.cart[action.index].quantity + 1
                    },
                    ...state.cart.slice(action.index + 1)
                ],
            }
        case DECREASE_QUANTITY:
            return {
                ...state,
                cart: [
                    ...state.cart.slice(0, action.index),
                    {
                        ...state.cart[action.index],
                        quantity: state.cart[action.index].quantity - 1
                    },
                    ...state.cart.slice(action.index + 1)
                ]
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart : [
                    ...state.cart.slice(0, action.index),
                    ...state.cart.slice(action.index + 1)
                ]
            }
        default:
            return state;
    }
};