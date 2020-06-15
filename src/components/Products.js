import React, { useEffect } from 'react';
import { connect } from "react-redux";

import {selectProduct, addItemToCart} from 'actions';
import {products} from 'helpers/products';

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import 'styles/Products.css'

const Products = ({dispatch, history, cart}) => {

    // const handlePurchase = (product) => {
    //     console.log('PRODUCT', product);
    //     dispatch(selectProduct(product))
    //     history.push('/checkout')
    // }

    const addToCart = (product) => {
        dispatch(addItemToCart(product));
    }

    useEffect(() => {
        console.log('CART', cart);
    }, [cart])
    
    const productNodes =  products.map(product => { 
        return (
        <div className='product' key={product.item_id}>
            <div className='product-image' style={{backgroundImage: `url(${product.item_img})`}} />
            <div className='product-text'>
            <h4>{product.item_name}</h4>
                <div className='product-info-wrapper'>
                    <h4>{'$' + product.price}</h4>
                </div>
                <div className='product-info-wrapper'>
                    <AddShoppingCartIcon onClick={() => addToCart(product)} className='add-to-cart' fontSize='large' />
                </div>
            </div>
        </div>
        )
    })

    return (
        <div className='products-container'>
            {productNodes}
        </div>
    )

    
}
 
function mapStateToProps(state) {
    return {
        cart: state.userActions.cart
    };
  }
  
  export default (connect(mapStateToProps)(Products));