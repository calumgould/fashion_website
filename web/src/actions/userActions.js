export const TOGGLE_DARK_MODE = 'TOGGLE_DARK_MODE';
export const SELECT_PRODUCT = 'SELECT_PRODUCT';
export const UPDATE_CART = 'UPDATE_CART';

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

export const updateCart = (cart) => dispatch => {
    dispatch({
        type: UPDATE_CART,
        cart
    })
    
        
}