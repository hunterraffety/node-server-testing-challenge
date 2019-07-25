const db = require('../data/dbConfig')

const Cars = require('./carsModel')

describe('cars model', () => {
  beforeEach(async () => {
    await db('cars').truncate()
  })

  describe('insert()', () => {
    it('should insert a car', async () => {
      await Cars.add({ car_model: 'Test', car_make: 'Test' })
      const cars = await db('cars')
      expect(cars).toHaveLength(1)
    })
  })

  describe('find()', () => {
    it('should retrieve all cars', async () => {
      await Cars.find()
      const cars = await db('cars')
      expect.arrayContaining(cars)
    })
  })
})
