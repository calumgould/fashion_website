import React from 'react';
import { connect } from "react-redux";

import {selectProduct} from 'actions';
import {products} from 'helpers/products';

const Products = ({history, dispatch}) => {

    const handlePurchase = (product) => {
        dispatch(selectProduct(product))
        history.push('/checkout')
    }
    
    return products.map(product => ( 
        <div className='product' key={product.id}>
            <section>
                <h2>{product.name}</h2>
                <p>{product.desc}</p>
                <h3>{'£' + product.price}</h3>
                <button type='button' onClick={handlePurchase}>
                    PURCHASE
                </button>
            </section>
            <img src={product.img} alt={product.name} />
        </div>
    ))
}
 
function mapStateToProps(state) {
    return {
      selectedProduct: state.userActions.selectedProduct
    };
  }
  
  export default (connect(mapStateToProps)(Products));