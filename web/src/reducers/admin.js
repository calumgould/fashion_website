import {
    GET_CATEGORIES,
    ADD_CATEGORY,
    GET_PRODUCTS,
    ADD_PRODUCT,
    REMOVE_PRODUCT
} from '../actions/';

export default (
    state = {
        categories: [],
        products: []
    },
    action
) => {
    switch (action.type) {
        case GET_CATEGORIES:
            return {
                ...state,
                categories: action.categories.data().categories
            };
        case ADD_CATEGORY:
            return {
                ...state,
                categories: [...state.categories, action.category],
            }
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.products.data().products,
            }
        case ADD_PRODUCT:
            return {
                ...state,
                products: [...state.products, action.product],
            }
        case REMOVE_PRODUCT:
            return {
                ...state,
                products : [
                    ...state.products.slice(0, action.index),
                    ...state.products.slice(action.index + 1)
                ]
            }
        default:
            return state;
    }
};