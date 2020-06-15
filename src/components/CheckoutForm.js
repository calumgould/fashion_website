import React from 'react';
import { connect } from "react-redux";
import { 
    CardElement, 
    useStripe, 
    useElements 
} from '@stripe/react-stripe-js';
import axios from 'axios';

const CheckoutForm = ({selectedProduct, history}) => {
    
    if (selectedProduct === null) history.push('/shop')

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement)
        })

        if (!error) {
            console.log(paymentMethod);
            try {
                const {data} = await axios.post('/api/charge', {
                    amount: selectedProduct.price * 100
                })
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                })
            } catch (error) {
                console.log('ERROR', error);
            }
        }
    }

    return (
        <form style={{maxWidth: '400px', margin: '0 auto'}} onSubmit={handleSubmit}>
            <h2>Price: {selectedProduct.price}</h2>
            <CardElement />
            <button type='submit' disabled={!stripe}>
                Pay
            </button>
        </form>
    )

}

function mapStateToProps(state) {
    return {
      selectedProduct: state.userActions.selectedProduct
    };
  }
  
  export default (connect(mapStateToProps)(CheckoutForm));