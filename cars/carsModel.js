const db = require('../data/dbConfig')

module.exports = {
  find,
  add
}

async function find() {
  return db('cars')
}

async function add(car) {
  return db('cars').insert(car, 'id')
}
