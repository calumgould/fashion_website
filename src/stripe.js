const stripe = require('stripe')('pk_test_51GtKN1JM5drvFu6sUukYJFNRNvDBtAbI88plWVK71Eifr2F7xz2HqWIm4GhKuI4ErGrgIltNAOc6htguFVhCd7h800OLHx1oJ0')

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