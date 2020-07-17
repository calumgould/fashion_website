import { 
    getProductCategories,
    addProductCategory,
    getProductList,
    addNewProduct,
    removeExistingProduct
} from '../firebase/firebase';

export const GET_CATEGORIES = 'GET_CATEGORIES';
export const ADD_CATEGORY = 'ADD_CATEGORY';
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

export const getCategories = () => dispatch => {
    getProductCategories()
        .then(categories => {
            dispatch({
                type: GET_CATEGORIES,
                categories
            })
        })
}

export const addCategory = (category) => dispatch => {
    addProductCategory(category)
    dispatch({
        type: ADD_CATEGORY,
        category
    })
}

export const getProducts = () => dispatch => {
    getProductList()
        .then(products => {
            console.log('PRODUCTS', products.data().products);
            
            dispatch({
                type: GET_PRODUCTS,
                products
            })
        })
}

export const addProduct = (product) => dispatch => {
    addNewProduct(product)
    dispatch({
        type: ADD_PRODUCT,
        product
    })
}

export const removeProduct = (product, products, index) => dispatch => {
    removeExistingProduct(product, products)
    dispatch({
        type: REMOVE_PRODUCT,
        index
    })
}

