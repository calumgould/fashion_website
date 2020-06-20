import { 
    addItemToFirestoreUserCart, 
    increaseQuantityFirestoreUserCart, 
    decreaseQuantityFirestoreUserCart ,
    removeProductFromFirestoreUserCart
} from '../firebase/firebase';

export const TOGGLE_DARK_MODE = 'TOGGLE_DARK_MODE';
export const SELECT_PRODUCT = 'SELECT_PRODUCT';
export const GET_CART = 'GET_CART';
export const ADD_TO_CART = 'ADD_TO_CART';
export const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

export const toggleDarkMode = (darkMode) => dispatch => {
    dispatch({
        type: TOGGLE_DARK_MODE,
        darkMode
    });
};

export const selectProduct = (product) => dispatch => {
    dispatch({
        type: SELECT_PRODUCT,
        product
    });
};

export const getCart = (cart) => dispatch => {
    dispatch({
        type: GET_CART,
        cart
    })
}

export const addProductToCart = (product, user) => dispatch => {
    addItemToFirestoreUserCart(user, product)
    dispatch({
        type: ADD_TO_CART,
        product
    })
}

export const increaseQuantity = (index, user, product, cart) => dispatch => {
    
    increaseQuantityFirestoreUserCart(index, user, product, cart)
    dispatch({
        type: INCREASE_QUANTITY,
        index
    })
}

export const decreaseQuantity = (index, user, product, cart) => dispatch => {
    decreaseQuantityFirestoreUserCart(index, user, product, cart)
    dispatch({
        type: DECREASE_QUANTITY,
        index
    })
}

export const removeProductFromCart = (index, user, product, cart) => dispatch => {
    removeProductFromFirestoreUserCart(index, user, product, cart)
    dispatch({
        type: REMOVE_FROM_CART,
        index
    })
}
    
        
