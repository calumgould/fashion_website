import React from 'react';
import { connect } from "react-redux";
import { 
    CardElement, 
    useStripe, 
    useElements 
} from '@stripe/react-stripe-js';
import axios from 'axios';

import 'styles/Stripe.css'

const CheckoutForm = ({cart}) => {

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const { data: { client_secret } } = await axios.post('http://localhost:3000/secret', cart);
        
        const result = await stripe.confirmCardPayment(client_secret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }, 
            billing_details: {
                // name: 'John Smith'
            }
        });

        console.log('stripe result', result);

    }

    const totalPrice = cart.reduce((sum, item) => {
        sum += item.price * item.quantity;
        return parseFloat(sum.toFixed(2))
    }, 0);

    return (
        <form className='checkout-form' onSubmit={handleSubmit}>
            <h3>Price: ${totalPrice}</h3>
            <CardElement />
            <p>(This is not a real shop. Payment functionality disabled)</p>
            <div className='button-wrapper'>
                <button type='submit' className='button' disabled={!stripe}>
                    Pay
                </button>
            </div>
        </form>
    )

}

function mapStateToProps(state) {
    return {
      cart: state.userActions.cart
    };
  }
  
  export default (connect(mapStateToProps)(CheckoutForm));