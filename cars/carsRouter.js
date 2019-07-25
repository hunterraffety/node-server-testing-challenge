const express = require('express')
const router = require('express').Router()

const Cars = require('./carsModel')

router.use(express.json())

router.get('/', async (req, res) => {
  await Cars.find()
    .then(cars => {
      res.status(200).json(cars)
    })
    .catch(error => {
      res.status(500).json({ message: 'Whoops! Error occurred.' })
    })
})

router.post('/', async (req, res) => {
  const newCar = req.body

  await Cars.add(newCar)
    .then(car => {
      res.status(201).json(car)
    })
    .catch(error => {
      res.status(500).json({ message: 'Error adding a car.', error })
    })
})

module.exports = router
