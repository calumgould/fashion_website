import {
    GET_CATEGORIES,
    ADD_CATEGORY,
} from '../actions/';

export default (
    state = {
        categories: []
    },
    action
) => {
    switch (action.type) {
        case GET_CATEGORIES:
            return {
                ...state,
                categories: action.categories
            };
        case ADD_CATEGORY:
            return {
                ...state,
                categories: [...state.categories, action.category],
            }
        default:
            return state;
    }
};