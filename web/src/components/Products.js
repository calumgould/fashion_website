import React from 'react';
import { connect } from "react-redux";

import ProductIncrement from 'components/ProductIncrement'

import 'styles/Products.css'

const Products = ({dispatch, cart, user, products}) => {

    const productNodes = products.map(product => { 

        const index = cart.findIndex((cartProduct) => cartProduct.id === product.id)

        return (
        <div className='product' key={product.id}>
            <div className='product-image' style={{backgroundImage: `url(${product.image})`}} />
            <div className='product-text'>
                <h4>{product.name}</h4>
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
        user: state.auth.user,
        products: state.admin.products
    };
  }
  
  export default (connect(mapStateToProps)(Products));