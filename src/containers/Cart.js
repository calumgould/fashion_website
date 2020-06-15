import React from 'react';
import { connect } from "react-redux";


const Cart = ({cart}) => {

    const generateCartItems = cart.map(cartItem => {
        return (
            <tr key={cartItem.item_id}>
                <td>
                    <img src={cartItem.item_img} alt={cartItem.item_name} />
                </td>
                <td>{cartItem.item_name}</td>
                <td>{cartItem.item_desc}</td>
                <td>{cartItem.quantity}</td>
                <td>${cartItem.price}</td>
            </tr>
        )
    })

    return ( 
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
     );
}
 
function mapStateToProps(state) {
    return {
        cart: state.userActions.cart
    };
  }
  
  export default (connect(mapStateToProps)(Cart));