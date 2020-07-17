const express = require('express');
const StripeFactory = require('stripe');
const stripe = StripeFactory(process.env.REACT_APP_STRIPE_SECRET_KEY);
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Headers", "Authorization, Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Expose-Headers", "Token-Refresh");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, DELETE, UPDATE");
    res.header("Vary", "Origin");
    res.header('Access-Control-Allow-Origin', '*');

    return next();
})

app.post('/secret', async (req, res) => {

    try {
        const cart = req.body;

        if (!cart || !Array.isArray(cart)) return res.status(400).json({ error: 'Not an array' });

        const totalPrice = cart.reduce((sum, item) => {
            sum += item.price;
            return sum;
        }, 0);

        const intent = await stripe.paymentIntents.create({
            amount: Math.round(totalPrice * 100),
            currency: 'gbp',
            metadata: {
                order_number: 'something'
            }
        });

        res.json({client_secret: intent.client_secret})
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

app.post('/stripe_webhook', (req, res) => {
    // something happened in stripe

    console.log('NEW WEBHOOK', JSON.stringify(req.body, null, 4));
    res.status(204).send()
});


app.listen(3000, () => {
    console.log('Running on port 3000');
})