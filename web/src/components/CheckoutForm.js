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

    const calculateTotalCartPrice = () => {
        const totalPrice = cart.reduce((prevItem, curItem) => {
            return prevItem + curItem.price;
        }, 0);
        console.log('total price', totalPrice);
        
        return Math.round(totalPrice * 100) / 100;
    }

    return (
        <form style={{maxWidth: '400px', margin: '0 auto'}} onSubmit={handleSubmit}>
            <h3>Price: ${calculateTotalCartPrice()}</h3>
            <CardElement />
            <button type='submit' disabled={!stripe}>
                Pay
            </button>
        </form>
    )

}

function mapStateToProps(state) {
    return {
      cart: state.userActions.cart
    };
  }
  
  export default (connect(mapStateToProps)(CheckoutForm));