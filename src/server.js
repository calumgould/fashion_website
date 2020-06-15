const express = require('express');

const app = express();

app.get('/secret', async (req, res) => {
    const intent = 
    res.json({client_secret: intent.client_secret})
})

app.listen(3000, () => {
    console.log('Running on port 3000');
})