export const TOGGLE_DARK_MODE = 'TOGGLE_DARK_MODE';
export const SELECT_PRODUCT = 'SELECT_PRODUCT';
export const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART';

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

export const addItemToCart = (item) => dispatch => {
    dispatch({
        type: ADD_ITEM_TO_CART,
        item
    })
}