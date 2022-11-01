const express = require('express');
const mongoose = require('mongoose')

const PORT = 3334

const app = express()

app.get('/', (req, res) => {
    return res.json({ status: true })

})

mongoose.connect('mongodb://localhost:27017')

mongoose.connection.on('connected', () => {
    console.log('Connected to Mongodb successfully')
})

mongoose.connection.on('error', (err) => {
    console.log('An error occurred while connecting to Mongodb');
    console.log(err);
})

app.listen(PORT, () => {
    console.log('Listening on port,', PORT)
})