import React from 'react';
import { connect } from "react-redux";

import {selectProduct} from 'actions';
import {products} from 'helpers/products';

import 'styles/Products.css'

const Products = ({dispatch, history}) => {

    const handlePurchase = (product) => {
        console.log('PRODUCT', product);
        dispatch(selectProduct(product))
        history.push('/checkout')
    }
    
    const productNodes =  products.map(product => { 
        return (
        <div className='product' key={product.id}>
            <section>
                <h3>{product.name}</h3>
                <p>{product.desc}</p>
                <h3>{'£' + product.price}</h3>
                <button onClick={() => handlePurchase(product)}>
                    PURCHASE
                </button>
            </section>
            <img src={product.img} alt={product.name} />
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

    };
  }
  
  export default (connect(mapStateToProps)(Products));