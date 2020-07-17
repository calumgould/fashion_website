import React from 'react';

import {
    addProductToCart, 
    increaseQuantity, 
    decreaseQuantity, 
    removeProductFromCart
} from 'actions';

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import RemoveRoundedIcon from '@material-ui/icons/RemoveRounded';
import AddRoundedIcon from '@material-ui/icons/AddRounded';

const ProductIncrement = ({dispatch, user, cart, product, index}) => {

    return ( 
        <>
            {index === -1 ? (
                <div className='product-info-wrapper'>
                    <AddShoppingCartIcon onClick={() => dispatch(addProductToCart(product, user))} className='add-to-cart' fontSize='large' />
                </div>
                ) : (
                <div className='product-info-wrapper'>
                    <div className='add-icon'>
    
                    {cart[index].quantity === 1 ? (
                        <div className='minus' onClick={() => dispatch(removeProductFromCart(index, user, product, cart))}>
                            <RemoveRoundedIcon fontSize='large' />
                        </div>
                    ) : (
                        <div className='minus' onClick={() => dispatch(decreaseQuantity(index, user, product, cart))}>
                            <RemoveRoundedIcon fontSize='large' />
                        </div>
                    )}
                    
                        <h4>{cart[index].quantity}</h4>
                        <div className='plus' onClick={() => dispatch(increaseQuantity(index, user, product, cart))}>
                            <AddRoundedIcon fontSize='large' />
                        </div>
                    </div>
                </div>
                )}
        </>
     );
}
 
export default ProductIncrement;