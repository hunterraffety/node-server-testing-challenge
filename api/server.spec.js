const request = require('supertest')

const server = require('./server')

describe('server', () => {
    it('db environment set to be testing', () => {
        expect(process.env.DB_ENV).toBe('testing')
    })
})
