import React from 'react';
import { connect } from "react-redux";

import {products} from 'helpers/products';

import ProductIncrement from 'components/ProductIncrement'

import 'styles/Products.css'

const Products = ({dispatch, cart, user}) => {

    const productNodes = products.map(product => { 

        const index = cart.findIndex((cartProduct) => cartProduct.product_id === product.product_id)

        return (
        <div className='product' key={product.product_id}>
            <div className='product-image' style={{backgroundImage: `url(${product.product_img})`}} />
            <div className='product-text'>
                <h4>{product.product_name}</h4>
                <div className='product-info-wrapper'>
                    <h4>{'$' + product.price}</h4>
                </div>
                <ProductIncrement 
                    dispatch={dispatch}
                    user={user}
                    cart={cart}
                    product={product}
                    index={index}
                />
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