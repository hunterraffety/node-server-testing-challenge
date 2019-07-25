const db = require('../data/dbConfig')
const request = require('supertest')

const Cars = require('./carsModel')

describe('cars model', () => {
  beforeEach(async () => {
    await db('cars').truncate()
  })

  describe('get /cars', () => {
    it('should return 200 OK', () => {
      return request(server)
        .get('/cars')
        .then(res => {
          expect(res.status).toBe(200)
        })
    })
  })
})
