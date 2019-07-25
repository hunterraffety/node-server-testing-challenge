const express = require('express')

const Cars = require('../cars/carsModel.js')

const server = express()

server.use(express.json())

server.get('/', (req, res) => {
    res.status(200).json({ message: 'Hey, you, good job!' })
})

module.exports = server
