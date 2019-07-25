const express = require('express')

const carsRouter = require('../cars/carsRouter')

const server = express()

server.use('/cars', carsRouter)
server.use(express.json())

server.get('/', (req, res) => {
  res.status(200).json({ message: 'Hey, you, good job!' })
})

module.exports = server
