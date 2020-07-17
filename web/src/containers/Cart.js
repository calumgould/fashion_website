import React from 'react';
import { connect } from "react-redux";

import ProductIncrement from 'components/ProductIncrement'

import 'styles/Cart.css'

const Cart = ({dispatch, user, cart, history}) => {

    const totalPrice = cart.reduce((sum, item) => {
        sum += item.price * item.quantity;
        return parseFloat(sum.toFixed(2))
    }, 0);

    const generateCartItems = cart.map(product => {

        const index = cart.findIndex((cartProduct) => cartProduct.id === product.id)
        
        return (
            <tr key={product.id}>
                <td className='table-image' style={{backgroundImage: `url(${product.image})`}} />
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>
                    <div className='quantity-buttons'>
                    <ProductIncrement
                            dispatch={dispatch}
                            user={user}
                            cart={cart}
                            product={product}
                            index={index}
                        />
                    </div>  
                </td>
                <td>${product.price}</td>
            </tr>
        )
    })

    if (cart.length > 0) { return ( 
        <div>
            <h2>Cart</h2>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {generateCartItems}
                </tbody>
            </table>
            <h3>Total: $ {totalPrice}</h3>
            <div className='button-wrapper'>
                <button onClick={() => history.push('/checkout')} className='button'>Checkout</button>
            </div>
        </div>
     )} else {
         return (
             <div>
                 <h2>Cart</h2>
                 <h3>You're cart is empty!</h3>
             </div>
         )
     }
}
 
function mapStateToProps(state) {
    return {
        cart: state.userActions.cart,
        user: state.auth.user
    };
  }
  
export default (connect(mapStateToProps)(Cart));