import React from 'react';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

import CheckoutForm from 'components/CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY)

const Checkout = ({history}) => {

    return ( 
        <Elements stripe={stripePromise}>
            <CheckoutForm history={history}/>
        </Elements>
    );
}
 
export default Checkout;