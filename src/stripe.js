const stripe = require('stripe')('sk_test_51GtKN1JM5drvFu6s6OyoVNMr4Oq6K8g4iWjEHBhRLbHmaTQJ39QRZ1hA24Glr5MIA6lCrO9xmBlCI1xfaw72RszX00ytDVORks')

async function postCharge(req, res) {
    try {
        const { amount, source, receipt_email} = req.body

        const charge = await stripe.charges.create({
            amount,
            current: 'gbp',
            source,
            receipt_email
        })

        if(!charge) throw new Error('charge unsuccessful')

        res.status(200).json({
            message: 'charge posted successfully',
            charge
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

module.exports = postCharge