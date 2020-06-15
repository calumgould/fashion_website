import Stripe from 'stripe';

const stripe = new Stripe(process.env.REACT_APP_STRIPE_SECRET_KEY)

export default async (req, res) => {
    const {amount} = req.body;
    
    if (req.method === 'POST') {
        try {
            const paymentIntent = await stripe.paymentIntents.create({
                amount,
                currency: 'gbp',
            })
            console.log(paymentIntent);

            res.status(200).send(paymentIntent.client_secret); 
        } catch(error) {
            res.status(500).json({ statusCode: 500, message: error.message })
        }
    } else {
        res.setHeader('Allow', 'POST')
        res.status(405).end('Method Not Allowed')
    }
}