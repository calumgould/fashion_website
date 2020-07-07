import { 
    getProductCategories,
    addProductCategory
} from '../firebase/firebase';

export const GET_CATEGORIES = 'GET_CATEGORIES';
export const ADD_CATEGORY = 'ADD_CATEGORY';

export const getCategories = (categories) => dispatch => {
    getProductCategories()
    dispatch({
        type: GET_CATEGORIES,
        categories
    })
}

export const addCategory = (category) => dispatch => {
    addProductCategory(category)
    dispatch({
        type: ADD_CATEGORY,
        category
    })
}

