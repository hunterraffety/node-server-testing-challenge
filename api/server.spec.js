const request = require('supertest')

const server = require('./server')

describe('server', () => {
  it('db environment set to be development', () => {
    expect(process.env.DB).toBe('development')
  })

  describe('GET /', () => {
    it('should return 200 OK', () => {
      return request(server)
        .get('/')
        .then(res => {
          expect(res.status).toBe(200)
        })
    })
  })

  describe('GET /cars', () => {
    it('should return 200 OK', () => {
      return request(server)
        .get('/cars')
        .then(res => {
          expect(res.status).toBe(200)
        })
    })
  })
})
