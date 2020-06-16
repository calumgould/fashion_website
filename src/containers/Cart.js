import React from 'react';
import { connect } from "react-redux";

const Cart = ({cart}) => {

    const generateCartItems = cart.map(cartItem => {
        return (
            <tr key={cartItem.product_id}>
                <td className='table-image' style={{backgroundImage: `url(${cartItem.product_img})`}} />
                <td>{cartItem.product_name}</td>
                <td>{cartItem.product_desc}</td>
                <td>{cartItem.quantity}</td>
                <td>${cartItem.price}</td>
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
        cart: state.userActions.cart
    };
  }
  
  export default (connect(mapStateToProps)(Cart));