const request = require('supertest')

const server = require('./server')

describe('server', () => {
  it('db environment set to be testing', () => {
    expect(process.env.DB_ENV).toBe('testing')
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
})
