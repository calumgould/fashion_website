import React from 'react';
import { connect } from "react-redux";

import {updateCart} from 'actions';
import {products} from 'helpers/products';

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import 'styles/Products.css'

const Products = ({dispatch, cart, user}) => {

    const addToCart = (product) => {

            const index = cart.findIndex((cartProduct) => cartProduct.product_id === product.product_id)
            
            if (index === -1) {
                cart.push({
                    ...product,
                    quantity: 1
                })
                dispatch(updateCart(cart, user))
            } else {
                cart[index] = ({
                    ...product,
                    quantity: product.quantity ++
                })
                dispatch(updateCart(cart, user))
            }
    }
    
    const productNodes = products.map(product => { 
        return (
        <div className='product' key={product.product_id}>
            <div className='product-image' style={{backgroundImage: `url(${product.product_img})`}} />
            <div className='product-text'>
            <h4>{product.product_name}</h4>
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
        cart: state.userActions.cart,
        user: state.auth.user
    };
  }
  
  export default (connect(mapStateToProps)(Products));